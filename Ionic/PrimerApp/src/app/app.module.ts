import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {ClimaPage} from'../pages/clima/clima';
import  {ProductoPage } from '../pages/producto/producto';
import {ServicioClima} from'../providers/servicio-clima';
import {ProductoService} from'../providers/productoService';
import  {EditarProductosComponent} from '../components/editar-productos/editar-productos';
import {CrearProductosComponent} from '../components/crear-productos/crear-productos'



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ClimaPage,
    ProductoPage,
    EditarProductosComponent,
    CrearProductosComponent
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ClimaPage,
    ProductoPage,
    EditarProductosComponent,
    CrearProductosComponent
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ServicioClima, ProductoService]
})
export class AppModule {}
