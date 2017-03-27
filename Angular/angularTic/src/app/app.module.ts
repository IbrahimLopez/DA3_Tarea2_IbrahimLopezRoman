import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';
import { ComponenteNuevoComponent } from './componente-nuevo/componente-nuevo.component';
import { Routes, RouterModule } from '@angular/router';
import {ProductosModule} from './productos/productos.module';
import  {ProductosComponent} from './productos/productos.component';





const routes: Routes = [
  {path:'componenteInicial', component:ComponenteNuevoComponent },
  
  

 
];
@NgModule({
  declarations: [
    AppComponent,
    Panel1Component,
    Panel2Component,
    ComponenteNuevoComponent,
    ProductosComponent,
    
  ],
  imports: [
  ProductosModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
