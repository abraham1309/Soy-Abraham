import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private viewporScroller: ViewportScroller) { }

  //Metodo para scroll en la misma pagina
  public enlaceScroll(IdElemento: string):void{ //El "IdElemento", es un parametro que traemos desde el html
    this.viewporScroller.scrollToAnchor(IdElemento); 
    /*Estamos llamando a "viewporScroller", con el ".scrollToAnchor" le estamos diciendo que haga un scroll, 
    al elemento con la id "IdElemento"*/
  }

  ngOnInit(): void {
  }

}
