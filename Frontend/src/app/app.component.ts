import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PessoaListaComponent } from './components/pessoa-lista/pessoa-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PessoaListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
}
