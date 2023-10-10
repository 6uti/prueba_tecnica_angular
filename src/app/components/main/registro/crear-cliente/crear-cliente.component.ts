import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

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
  }

  registrarCliente(){
    console.log(this.formulario);
    const cliente: Cliente = {
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      telefono: this.formulario.value.telefono,
      localidad: this.formulario.value.localidad,
      estado: 'Activado'
    }
    console.log("cliente",cliente);

    this._clienteService.agregarCliente(cliente);
    this.router.navigate(['/main/registro']);

    this._snackBar.open('Cliente registrado correctamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }


}
