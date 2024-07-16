import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuService } from '../../../../service/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public idMenu: string = "";
  public idEstabelecimento: string = "";
  public categorias: any[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService
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
}
