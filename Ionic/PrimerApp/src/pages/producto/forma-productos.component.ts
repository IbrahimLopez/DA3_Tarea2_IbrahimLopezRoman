import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../providers/productoService';
import {Producto} from '../producto/productoClass';

@Component({
  selector: 'app-forma-productos',
  templateUrl: './forma-productos.component.html',
  styleUrls: ['./forma-productos.component.css']
})
export class FormaProductosComponent implements OnInit {
  nuevoProducto: Producto= new Producto();
  constructor( 

    private _ProductoServiceService:ProductoService,



    ) {}

  ngOnInit() {
  	
  	
  }

  guardarProducto(){
    this._ProductoServiceService.addProducto(this.nuevoProducto).subscribe(
      (data)=>{
        var funciono=data.funciono;
        if(funciono) {
          // redireccionar
         
          console.log(JSON.stringify(this.nuevoProducto));
        }
      },
      (err)=>{}
      );

  }



  imprimirNuevoProducto(){
  	 console.log(JSON.stringify(this.nuevoProducto));
  }


}
