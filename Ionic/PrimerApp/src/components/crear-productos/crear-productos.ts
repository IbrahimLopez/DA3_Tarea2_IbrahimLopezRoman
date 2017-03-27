import { Component } from '@angular/core';
import {Producto} from '../../pages/producto/productoClass';
import {ProductoService} from '../../providers/productoService';
import { NavController, NavParams } from 'ionic-angular';
import {ProductoPage} from '../../pages/producto/producto';


/*
  Generated class for the CrearProductos component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'crear-productos',
  templateUrl: 'crear-productos.html'
})
export class CrearProductosComponent {
 producto:Producto = new Producto();
 
  text: string;

  constructor(
    public ProductoService: ProductoService,
    public NavController: NavController,
    public NavParams: NavParams

  ) {
    console.log('Hello CrearProductos Component');
    this.text = 'Hello World';
  }
  CrearProducto(){
      this.ProductoService.addProducto(this.producto).subscribe(
        (data)=>{
        var funciono=data.funciono;
        if(funciono) {
          // redireccionar                    
          this.NavController.push(ProductoPage)          
          console.log(JSON.stringify(this.producto));
        }
      },
      (err)=>{}
      );

  }

}
