import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component implements OnInit {

  public cont;
	miValor:string;
  constructor() { }

  ngOnInit() {
  	this.cont=0;
  	this.miValor="";
  }
  lanzarAlerta(){
  	this.cont++;

  }

  esInputValido(){
  return this.miValor.length>=10;
  }

}
