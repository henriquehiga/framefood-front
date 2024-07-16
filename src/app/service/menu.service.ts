import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private readonly apiUrl = "http://localhost:3000";

    constructor(
        private readonly httpClient: HttpClient
    ) { }

    async resgatarMenusPorIdEstabelecimento(idEstabelecimento: string) {
        const resposta = await this.httpClient.get(`${this.apiUrl}/menu/resgatar-por-id-estabelecimento?id-estabelecimento=${idEstabelecimento}`).toPromise() as any;
        return resposta;
    }

    async resgatarCategoriasPorIdMenu(idMenu: string) {
        const resposta = await this.httpClient.get(`${this.apiUrl}/categoria-produto/resgatar-por-id-menu?id-menu=${idMenu}&com-produtos=false`).toPromise() as any;
        return resposta;
    }
}
