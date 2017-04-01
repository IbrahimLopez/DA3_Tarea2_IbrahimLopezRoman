import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto}from './productoClass';
import {ProductoService} from '../../providers/productoService';
import {EditarProductosComponent} from '../../components/editar-productos/editar-productos';
import {CrearProductosComponent} from '../../components/crear-productos/crear-productos';



/*
  Generated class for the Producto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html'
})
export class ProductoPage {
productos:Producto[];
 
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
   public productoService:ProductoService
   ) {}

  ionViewDidLoad() {
    
    this.productoService
  	.getProductos()
  	.subscribe(
  		(data:Producto[])=>{
  			this.productos = data;
  		
  		},
  		(error)=>{},
  		);
  }
  borrarProducto(eliminarProducto){
    this.productoService.removeProductos(eliminarProducto).subscribe(
      (eliminarProcuto)=>{
        var funciono=eliminarProcuto;
        if(funciono!=null){
          this.ionViewDidLoad();
          alert("El Producto se elimino");
        }
      },
      (err)=>{alert("Error, no se pudo eliminar el Producto")}
      )
  }
  editarProducto(id){
    this.navCtrl.push(EditarProductosComponent,id);
  }
  crear(){
    this.navCtrl.push(CrearProductosComponent)
  }


}
