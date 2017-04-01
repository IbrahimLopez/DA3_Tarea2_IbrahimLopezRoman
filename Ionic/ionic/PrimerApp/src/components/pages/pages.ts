import { Component } from '@angular/core';

/*
  Generated class for the Pages component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'pages',
  templateUrl: 'pages.html'
})
export class PagesComponent {

  text: string;

  constructor() {
    console.log('Hello Pages Component');
    this.text = 'Hello World';
  }

}
