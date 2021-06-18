import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Funcion para la animacion de escribir 
    var i=0;
    const text="si se puede imaginar se puede programar";
    var textOb:any;

    function escribir() {
      if(i<text.length){
        textOb= document.getElementById('divText');
        textOb.innerHTML +=text.charAt(i);
        i++;
        setTimeout(escribir, 70);
      }
    }

    setTimeout(escribir, 2500)

  }

}
