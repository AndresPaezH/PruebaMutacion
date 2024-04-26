import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }

  getClients(): Observable<Cliente[]> {
    return of(CLIENTES);//Se convierte/se crea nuestro flujo observable a partir de los objetos CLIENTES
  }
}
