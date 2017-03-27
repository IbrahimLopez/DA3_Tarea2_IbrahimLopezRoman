import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductoService {
	private apiURL:string = 'http://localhost:61994/';
  constructor(private _http:Http) { }

  public getProductos(){
  	return this._http
  	.get(this.apiURL+'productos/getJsonList')
  	.map(res=>res.json())

  }

  public addProductos(producto){
  	return this._http
  	.post(this.apiURL+'productos/createProducto', producto)
  	.map(res=>res.json())

  }
   public deleteProducto(id){
    return this._http
    .post(this.apiURL+'productos/eliminarProducto/'+id,null)
    .map(res=>res.json())
    

  }
  public editarProducto(id){
    return this._http
    .get(this.apiURL+'productos/editarProducto/'+id,null)
    .map(res=>res.json())
    

  }
  public editar(producto){
    return this._http
    .post(this.apiURL+'productos/editar',producto)
    .map(res=>res.json())
    

  }

}
