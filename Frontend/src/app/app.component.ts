import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PessoaListaComponent } from './components/pessoa-lista/pessoa-lista.component';
import { PessoaFormModalComponent } from './components/pessoa-form-modal/pessoa-form-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PessoaListaComponent, MatDialogModule, PessoaFormModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
}
