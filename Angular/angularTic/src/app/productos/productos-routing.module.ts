import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './productos.component'
import {FormaProductosComponent} from './forma-productos/forma-productos.component'
import {EditarProductosComponent} from'./editar-productos/editar-productos.component'


const routes: Routes = [
  
  {path:'indexProductos', component:ProductosComponent },
  {path:'crearProductos', component:FormaProductosComponent },
  {path: 'editarProductos', component: EditarProductosComponent},
  {path:'editarProductos/:id', component: EditarProductosComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductosRoutingModule { }
	