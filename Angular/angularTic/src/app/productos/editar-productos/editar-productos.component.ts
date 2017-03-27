import { Component, OnInit } from '@angular/core';
//darle soporte para recibir datos por url
import {Router, ActivatedRoute, Params} from'@angular/router';
import 'rxjs/add/operator/switchMap';
import {ProductoService} from '../../producto.service'
import {Producto} from '../producto'
@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  productos:Producto[];
  producto: Producto= new Producto();
  constructor(
    
    private route: ActivatedRoute,
    private router: Router,
    private _productoService:ProductoService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((Params:Params)=>{
        this._productoService.editarProducto(Params['id']).subscribe(
            (data:Producto[])=>{
              this.producto = data;
              alert(Params['id']);
              console.log(JSON.stringify(this.producto));
            },
            (error)=>{},
            );

          })
   
  }
  EditarProducto(){
    this._productoService.editar(this.producto).subscribe(
      (data)=>{        
        if(data=!null) {
               
          console.log(JSON.stringify(this.producto));
          alert('Editado correctamente')
          this.router.navigate(['indexProductos']);// redireccionar     
        }
      },//cierre de producto
      (error)=>{}
    );//cierre del subscribe

  }//cierre EditarProducto
  
  

}
