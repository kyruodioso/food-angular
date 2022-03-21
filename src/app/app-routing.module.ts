import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatosComponent } from './pages/platos/platos.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cocina',
    component: PlatosComponent
  },
  {
    path:'nosotros',
    component: NosotrosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }