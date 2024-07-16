import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EstabelecimentoService } from '../../../service/estabelecimento.service';
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-estabelecimento',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './estabelecimento.component.html',
  styleUrl: './estabelecimento.component.scss'
})
export class EstabelecimentoComponent implements OnInit {
  public idEstabelecimento: string = "";
  public dadosEstabelecimento: any;
  public menusEstabelecimento: any[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly estabelecimentoService: EstabelecimentoService,
    private readonly menuService: MenuService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.paramMap.forEach((parametro) => {
      this.idEstabelecimento = parametro.get('idEstabelecimento') ?? "";
    });
    await this.resgatarDadosEstabelecimentoPorId();
    await this.resgatarMenusPorIdEstabelecimento();
  }

  async resgatarDadosEstabelecimentoPorId() {
    this.dadosEstabelecimento = await this.estabelecimentoService.resgatarDadosEstabelecimento(this.idEstabelecimento);
  }

  async resgatarMenusPorIdEstabelecimento() {
    this.menusEstabelecimento = await this.menuService.resgatarMenusPorIdEstabelecimento(this.dadosEstabelecimento._id);

    console.log(this.menusEstabelecimento)
  }
} 
