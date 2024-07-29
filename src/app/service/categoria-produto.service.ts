import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProdutoService {
  private readonly apiUrl = "http://localhost:3000";

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  async criarCategoriaProdutoService(dados: any) {
    await this.httpClient.post(`${this.apiUrl}/categoria-produto/`, dados).toPromise();
  }

  async deletarCategoriaProduto(id: string) {
    await this.httpClient.delete(`${this.apiUrl}/categoria-produto?id-categoria-produto=${id}`).toPromise();
  }
}
