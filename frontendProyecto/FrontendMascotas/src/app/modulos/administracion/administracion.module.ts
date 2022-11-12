import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearProductoServicioComponent } from './productoServicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productoServicios/editar-producto-servicio/editar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productoServicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productoServicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    BuscarProductoServicioComponent,
    EliminarProductoServicioComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    BuscarPlanComponent,
    EliminarPlanComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    BuscarSucursalComponent,
    EliminarSucursalComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
