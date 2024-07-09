import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EstabelecimentoService } from '../../../service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './estabelecimento.component.html',
  styleUrl: './estabelecimento.component.scss'
})
export class EstabelecimentoComponent implements OnInit {
  public idEstabelecimento: string = "";
  public dadosEstabelecimento: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly estabelecimentoService: EstabelecimentoService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.queryParamMap.forEach((parametro) => {
      this.idEstabelecimento = parametro.get('id-estabelecimento') ?? "";
    })
    await this.resgatarDadosEstabelecimentoPorId();
  }

  async resgatarDadosEstabelecimentoPorId() {
    this.dadosEstabelecimento = await this.estabelecimentoService.resgatarDadosEstabelecimento(this.idEstabelecimento);
  }
} 
