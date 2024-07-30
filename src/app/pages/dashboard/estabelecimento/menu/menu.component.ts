import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoriaProdutoService } from '../../../../service/categoria-produto.service';
import { MenuService } from '../../../../service/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public idMenu: string = "";
  public idEstabelecimento: string = "";
  public categorias: any[] = [];

  public formNovaCategoriaProduto: FormGroup = new FormGroup({
    'nome-categoria-produto': new FormControl(''),
  });

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
    this.formNovaCategoriaProduto.touched;
    const dados = {
      "idMenu": this.idMenu,
      "nome": this.formNovaCategoriaProduto.get('nome-categoria-produto')?.value,
      "status": true
    };
    await this.categoriaProdutoService.criarCategoriaProdutoService(dados);
    await this.resgatarCategoriasPorIdMenu();
    this.formNovaCategoriaProduto.reset();
  }

  async deletarCategoriaProduto(id: string) {
    await this.categoriaProdutoService.deletarCategoriaProduto(id);
    await this.resgatarCategoriasPorIdMenu();
  }
}
