import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  async resgatarEstabelecimentosPorIdUsuario(idUsuario: string) {
    const resposta = await this.httpClient.get(`http://localhost:3000/estabelecimento/resgatar-estabelecimento-por-id-usuario?id-usuario=${idUsuario}`).toPromise() as any;
    return resposta;
  }

  async resgatarDadosEstabelecimento(idEstabelecimento: string) {
    const resposta = await this.httpClient.get(`http://localhost:3000/estabelecimento?id-estabelecimento=${idEstabelecimento}`).toPromise() as any;
    return resposta;
  }
}
