import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PessoaFormModalComponent } from '../pessoa-form-modal/pessoa-form-modal.component'; // ajuste o caminho conforme necessário


import { Pessoa, PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa-lista',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.scss'] // se você tiver esse arquivo
})
export class PessoaListaComponent {
  colunas: string[] = ['nome', 'cpf', 'genero', 'endereco', 'idade', 'municipio', 'estado'];
  dataSource = new MatTableDataSource<Pessoa>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pessoaService: PessoaService, private dialog: MatDialog) {}


carregarPessoas() {
  this.pessoaService.getPessoas().subscribe({
    next: data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    },
    error: err => console.error('Erro ao buscar pessoas:', err)
  });
  
}

adicionarPessoa() {
  const dialogRef = this.dialog.open(PessoaFormModalComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.pessoaService.adicionarPessoa(result).subscribe(() => {
        this.carregarPessoas();
      });
    }
  });
}


deletarPessoa(id: number) {
  this.pessoaService.deletarPessoa(id).subscribe(() => {
    this.carregarPessoas(); // Recarrega a lista
  });
}


  applyFilter(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }
}
