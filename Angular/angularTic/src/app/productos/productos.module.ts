import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
//import { ProductosComponent } from './productos.component';
import {ProductoService} from '../producto.service';
import { FormaProductosComponent } from './forma-productos/forma-productos.component'
import {FormsModule} from '@angular/forms';
import { EditarProductosComponent } from './editar-productos/editar-productos.component'

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  declarations: [
 // ProductosComponent,
  FormaProductosComponent,
  EditarProductosComponent
  ],
  providers:[ProductoService]

})
export class ProductosModule { }
