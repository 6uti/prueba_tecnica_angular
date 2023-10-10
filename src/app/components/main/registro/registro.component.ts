import {Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TableUtil } from "./TableUtil";
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  listClientes: Cliente[] = [];
  dataSource!:MatTableDataSource<any>;

  displayedColumns: string[] = ['Nombre', 'Apellido','Telefono','Localidad', 'Estado','Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _clienteService: ClienteService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    var datosClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    if(datosClientes!=null){
      this.dataSource = new MatTableDataSource(datosClientes);
    }else{
      this._clienteService.getClientes().subscribe(data =>{
        //console.log(data);
        this.dataSource = new MatTableDataSource(data);
        localStorage.setItem("clientes", JSON.stringify(data));
      })
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  exportTable(){
    TableUtil.exportToPdf("ExampleTable");
  }

  eliminarCliente(index: number){
    console.log(index);
    this._clienteService.eliminarCliente(index);
    this.cargarClientes();
    this._snackBar.open('Cliente eliminado correctamente','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  actualizarCliente(indice: number){
    //var datosClientes = JSON.parse(localStorage.getItem("clientes")!) ;
    localStorage.setItem("indexActualizarCliente", ""+indice);
    /*datosClientes.forEach(function (value: any, index: any) {
      if(indice == index){
        localStorage.setItem("indexActualizarCliente", JSON.stringify(value));
      } 
    }); */
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
/*
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } */
  }
}
