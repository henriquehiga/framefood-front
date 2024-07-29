import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuService } from '../../../../service/menu.service';
import { CategoriaProdutoService } from '../../../../service/categoria-produto.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public idMenu: string = "";
  public idEstabelecimento: string = "";
  public categorias: any[] = [];
  public nomeCategoriaProduto: string = "";

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService,
    private readonly categoriaProdutoService: CategoriaProdutoService
  ) { }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.forEach((parametro) => {
      this.idMenu = parametro.get('idMenu') ?? "";
      this.idEstabelecimento = parametro.get('idEstabelecimento') ?? "";
    })
    await this.resgatarCategoriasPorIdMenu();
  }

  async resgatarCategoriasPorIdMenu() {
    this.categorias = await this.menuService.resgatarCategoriasPorIdMenu(this.idMenu);
  }

  async criarCategoriaProduto() {
    const dados = {
      "idMenu": this.idMenu,
      "nome": this.nomeCategoriaProduto,
      "status": true
    };
    await this.categoriaProdutoService.criarCategoriaProdutoService(dados);
    await this.resgatarCategoriasPorIdMenu();
  }

  async deletarCategoriaProduto(id: string) {
    await this.categoriaProdutoService.deletarCategoriaProduto(id);
    await this.resgatarCategoriasPorIdMenu();
  }
}
