import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir($event: Transferencia) {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    const form = document.querySelector('form')
    form?.reset()

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      this.router.navigateByUrl('extrato')
    },
    (error)=> console.log(error));

  }
}
