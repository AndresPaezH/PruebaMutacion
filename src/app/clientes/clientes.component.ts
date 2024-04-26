import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

  clientes: Cliente[];

  //esto es lo mismo que lo de abajo
  constructor(private clienteService: ClienteService){}
  
  /**
   * private clienteService: ClienteService
   * 
   * constructor(clienteService: ClienteService){
   *  this.clienteService = clienteService;
   * }
   */

  ngOnInit(){
    this.clienteService.getClients().subscribe(//el suscribe es para poder obervar el observable, que seria la variable clientes retornada de la clase service
      clientes => this.clientes = clientes 
      /**
       * Lo de arriba es una forma que tiene typescript para simplificar las funciones anonimas pero
       * esto podria ser: 
       * 
       * (cliente) => {
       *  this.clientes = clientes
       * }
       * 
       * ó 
       * 
       * function (clientes){
       *  this.clientes = clientes
       * }
       * 
       * esto es una funcion anonima que se encarga de asignar el valor del clientes que trae el metodo a this. clientes
       * que es el elemento general
       * 
       * Tambien podria recibir mas elementos
       * 
       * function (clientes, otroObjeto){
       *  this.clientes = clientes
       *  this.otroObjeto = otroObjeto
       * }
       */
    );
  }

}
