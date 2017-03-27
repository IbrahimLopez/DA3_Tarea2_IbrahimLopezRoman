import { NavController, NavParams } from 'ionic-angular/umd';
import { Component, OnInit } from '@angular/core';
//daler soporte para recibir datos por la URL 
import 'rxjs/add/operator/switchMap';
import { ProductoService } from '../../providers/productoService';
import {ProductoPage } from '../producto/producto'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
   productos:ProductoPage[];


  constructor(
    private NavController: NavController,
    private NavParams: NavParams,
    private _productoService:ProductoService
  ) { }

  ngOnInit() {
    console.log(this.NavParams.get('id'));
  }

}
