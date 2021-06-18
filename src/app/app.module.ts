import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from "@angular/cdk/clipboard";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IncioComponent } from './incio/incio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IncioComponent,
    SobreMiComponent,
    ServiciosComponent,
    TecnologiasComponent,
    ContactoComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
