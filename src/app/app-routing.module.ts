import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ProductoComponent } from './component/producto/container/producto/producto.component';

const routes: Routes = [
  { path: 'clientes',component:ClientListComponent },
  { path: 'productos',component:ProductoComponent },
  { path: 'addclient',component:ClientAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
