import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../producto.service';
import {Producto} from '../producto';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forma-productos',
  templateUrl: './forma-productos.component.html',
  styleUrls: ['./forma-productos.component.css']
})
export class FormaProductosComponent implements OnInit {
  nuevoProducto: Producto= new Producto();
  constructor( 

    private _ProductoServiceService:ProductoService,

    private _router:Router

    ) {}

  ngOnInit() {
  	
  	
  }

  guardarProducto(){
    this._ProductoServiceService.addProductos(this.nuevoProducto).subscribe(
      (data)=>{
        var funciono=data.funciono;
        if(funciono) {
          // redireccionar
          this._router.navigate(['indexProductos']);
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
