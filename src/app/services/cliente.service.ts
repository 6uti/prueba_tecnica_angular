import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listClientes: Cliente[] = [];

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('./assets/data/clientes.json')
  }

  eliminarCliente(indice: number){
    var datosClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    datosClientes.forEach(function (value: any, index: any) {
      if(indice == index){
        value.estado = "Desactivado";
      }
    }); 
    localStorage.setItem("clientes", JSON.stringify(datosClientes));
  }

  agregarCliente(cliente: Cliente){
    this.listClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    this.listClientes.unshift(cliente);
    localStorage.setItem("clientes", JSON.stringify(this.listClientes));
  }

  actualizarCliente(cliente: any){
    var datosClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    datosClientes.forEach(function (value: any, index: any) {
      if(cliente.index == index){
        value.nombre = cliente.nombre;
        value.apellido = cliente.apellido;
        value.telefono = cliente.telefono;
        value.localidad = cliente.localidad;
      }
    }); 
    localStorage.setItem("clientes", JSON.stringify(datosClientes));

  }
}
