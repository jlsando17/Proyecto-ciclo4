import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {SeguridadRoutingModule} from './seguridad-routing.module';
import {IdentificacionComponent} from './identificacion/identificacion.component';
import {CambioClaveComponent} from './cambio-clave/cambio-clave.component';
import {RecuperarClaveComponent} from './recuperar-clave/recuperar-clave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule



  ]
})
export class SeguridadModule { }
