import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pessoa {
  id?: number;
  nome: string;
  cpf: string;
  genero: string;
  endereco: string;
  idade: number;
  municipio: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})

export class PessoaService {
  private baseUrl = 'http://localhost:5000/api/pessoas'; // ajuste a porta conforme seu backend

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseUrl);
  }
    adicionarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  deletarPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
