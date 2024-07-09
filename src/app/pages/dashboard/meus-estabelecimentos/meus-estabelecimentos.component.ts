import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../../../service/estabelecimento.service';
import { UsuarioService } from '../../../service/usuario.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-estabelecimentos',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './meus-estabelecimentos.component.html',
  styleUrl: './meus-estabelecimentos.component.scss'
})
export class MeusEstabelecimentosComponent implements OnInit {
  public usuario: any;
  public estabelecimentosUsuario: any[] = [];

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly estabelecimentoService: EstabelecimentoService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.usuario = await this.usuarioService.obtemInformacoesUsuario();
    this.estabelecimentosUsuario = await this.estabelecimentoService.resgatarEstabelecimentosPorIdUsuario(this.usuario.id);
  }
}
