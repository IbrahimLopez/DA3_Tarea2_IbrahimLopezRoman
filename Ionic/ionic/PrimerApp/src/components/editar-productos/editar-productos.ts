import { Metadata } from 'ionic-native/dist/esm';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductoService} from '../../providers/productoService';
import {Producto}from '../../pages/producto/productoClass';
import {ProductoPage} from '../../pages/producto/producto'

/*
  Generated class for the EditarProductos component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'editar-productos',
  templateUrl: 'editar-productos.html'
})
export class EditarProductosComponent {
  productos:Producto[];
  producto: Producto= new Producto;
  text: string;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
   public productoService:ProductoService ) 
   {}
  
  
  ionViewDidLoad() {
    
    var id = this.navParams.data;
    this.productoService.editarProducto(id).subscribe(
        (data:Producto[])=>{
              this.producto = data;              
              console.log(JSON.stringify(this.producto));
            },
            (error)=>{},
            );
    
  }
  EditarProducto(){
    this.productoService.editar(this.producto).subscribe(
      (data)=>{        
        if(data=!null) {
               
          console.log(JSON.stringify(this.producto));
          alert('Editado correctamente')
          this.navCtrl.push(ProductoPage)// redireccionar     
        }
      },//cierre de producto
      (error)=>{}
    );
  }

}
