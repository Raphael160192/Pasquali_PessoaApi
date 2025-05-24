import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pessoa-form-modal',
  standalone: true,
  templateUrl: './pessoa-form-modal.component.html',
  styleUrls: ['./pessoa-form-modal.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PessoaFormModalComponent {
  form = this.fb.group({
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
    genero: ['', Validators.required],
    endereco: ['', Validators.required],
    idade: [0, [Validators.required, Validators.min(0)]],
    municipio: ['', Validators.required],
    estado: ['', [Validators.required, Validators.maxLength(2)]]
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PessoaFormModalComponent>
  ) {}

  salvar() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
