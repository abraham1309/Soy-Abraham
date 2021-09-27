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
    const text="Si se puede imaginar se puede programar";
    var textOb1:any;
    var textOb12: any;

    var aux2=0;
    const text2="En memoria de Alejandro Taboada Sánchez (Programacion ATS)";
    var textOb2:any;
    var textOb22:any;

    function escribir() {
      if(i<text.length){
        textOb1= document.getElementById('divText1.2');
        textOb1.innerHTML +=text.charAt(i);

        textOb12=document.getElementById('divText1.1');
        textOb12.innerHTML +=text.charAt(i);
        i++;
        setTimeout(escribir, 70);
      }

      if(i==text.length){
        setTimeout(escribir2, 900);
      }
    }

    function escribir2() {
      if(aux2<text2.length){
        textOb2= document.getElementById('divText2.2');
        textOb2.innerHTML +=text2.charAt(aux2);
        
        textOb22=document.getElementById('divText2.1');
        textOb22.innerHTML +=text2.charAt(aux2);
        aux2++;
        setTimeout(escribir2, 140);
      }
    }

    setTimeout(escribir, 2500)

  }

}
