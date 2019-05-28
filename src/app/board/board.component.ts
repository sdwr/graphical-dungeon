import { Component, Input } from '@angular/core';
import * as PIXI from 'pixi.js';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.css' ]
})
export class BoardComponent  {

  app;

  constructor() {}
  
  ngOnInit() {
    this.app = new PIXI.Application({
    width: 500, height: 500, backgroundColor: 0x1099bb});
    document.body.appendChild(this.app.view);
  }
}
