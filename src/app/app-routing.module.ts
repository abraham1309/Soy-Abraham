import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IncioComponent } from './incio/incio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

/*Investigar de Anchor Scrolling https://azaharafernandezguizan.medium.com/anchor-link-en-angular-6-69ab8cfa92a3*/
/* <app-navbar></app-navbar>
<app-incio></app-incio>
<app-sobre-mi></app-sobre-mi>
<app-proyectos></app-proyectos>
<app-tecnologias></app-tecnologias>
<app-contacto></app-contacto>
<app-footer></app-footer> 
*/

const routes: Routes = [
  {
    path: "", component: IncioComponent
  },
  
  {
     path: "SobreMi", component: SobreMiComponent
  },

  {
    path: "proyectos", component: ProyectosComponent
  },

  {
    path: "tecnologias", component: TecnologiasComponent
  },

  {
    path: "contacto", component: ContactoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
