import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  async obtemInformacoesUsuario() {
    const resposta = await this.httpClient.get('http://localhost:3000/usuario?email=Arvilla.Bruen12@hotmail.com').toPromise() as any;

    return {
      id: resposta._id,
      nome: resposta._nomeCompleto,
      email: resposta._email
    };
  }
}
