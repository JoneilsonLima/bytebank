import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];


  constructor(){
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia
  }

  adicionar(transferencia: any) {
    this.hidrata(transferencia);
    this.listaTransferencia.push(transferencia)
  }

  private hidrata(transferencia: any) {
    transferencia.data = new Date()
  }
}
