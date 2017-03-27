import { Component, OnInit } from '@angular/core';
import {Producto} from './producto';
import {ProductoService} from '../producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	//Contenedor de prductos
	productos:Producto[];

  constructor(
  	//se hace referencia a el servicio que nos proveera datos del server
  	private _productoService:ProductoService,
    private _router:Router
  	) { }

  ngOnInit() {
  	this._productoService
  	.getProductos()
  	.subscribe(
  		(data:Producto[])=>{
  			this.productos = data;
  		
  		},
  		(error)=>{},
  		);
  }  
  


  //Eliminar un prducto
 eliminarProducto(id){
    this._productoService.deleteProducto(id).subscribe(
        (id)=>{          
          if(id!=null) {
           this.ngOnInit();
            alert("El producto a sido eliminado");        
            }//cierre del if
         },
        (err)=>{alert("ERROR!! NO SE PUDO ELIMINAR EL PRODUCTO");}//cierre del err de la funcion delete
      );//cierre del subscribe de la funcion eliminarProducto           
  }//cierre funcion eliminarProducto

 
}
