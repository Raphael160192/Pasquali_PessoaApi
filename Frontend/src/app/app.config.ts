import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PessoaListaComponent } from './components/pessoa-lista/pessoa-lista.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: PessoaListaComponent }
    ]),
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
      MatTableModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    )
  ]
};
