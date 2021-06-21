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

    var aux2=0;
    const text2="En memoria de Alejandro Taboada Sánchez (Programacion ATS)";
    var textOb:any;

    function escribir() {
      if(i<text.length){
        textOb= document.getElementById('divText');
        textOb.innerHTML +=text.charAt(i);
        i++;
        setTimeout(escribir, 70);
      }

      if(i==text.length){
        setTimeout(escribir2, 900);
      }
    }

    function escribir2() {
      if(aux2<text2.length){
        textOb= document.getElementById('divText2');
        textOb.innerHTML +=text2.charAt(aux2);
        aux2++;
        setTimeout(escribir2, 140);
      }
    }

    setTimeout(escribir, 2500)

  }

}
