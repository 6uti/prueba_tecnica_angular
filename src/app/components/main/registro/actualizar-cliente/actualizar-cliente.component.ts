import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent  implements OnInit {

  localidades: any[] = ['Lima','Arequipa','Cusco'];
  formulario: FormGroup;

  constructor(private fb:FormBuilder, private _clienteService: ClienteService, private router:Router, private _snackBar: MatSnackBar){
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      telefono:['',Validators.required],
      localidad:['',Validators.required]
    })
  }
  ngOnInit(){
    var indexActualizarCliente = JSON.parse(localStorage.getItem("indexActualizarCliente")!) ;
    console.log("indexActualizarCliente",indexActualizarCliente);

    var datosClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    //localStorage.setItem("indexActualizarCliente", ""+indice);
    datosClientes.forEach( (value: any, index: any) => {
      if(indexActualizarCliente == index){
        this.formulario.controls['nombre'].setValue(value.nombre);
        this.formulario.controls['apellido'].setValue(value.apellido);
        this.formulario.controls['telefono'].setValue(value.telefono);
        this.formulario.controls['localidad'].setValue(value.localidad);
      } 
    });
  }

  actualizarCliente(){
    var indexActualizarCliente = JSON.parse(localStorage.getItem("indexActualizarCliente")!);

    const cliente = {
      index: indexActualizarCliente,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      telefono: this.formulario.value.telefono,
      localidad: this.formulario.value.localidad
    }

    this._clienteService.actualizarCliente(cliente);
    this.router.navigate(['/main/registro']);

    this._snackBar.open('Cliente actualizado correctamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })

  }


}
