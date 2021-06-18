import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  correo='superx1@live.com.mx';

  constructor() { }

  ngOnInit(): void {
  }

}
