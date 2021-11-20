import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoListComponent } from './component/producto/components/list/producto-list/producto-list.component';
import { ProductoComponent } from './component/producto/container/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientListComponent,
    ClientAddComponent,
    ProductoListComponent,
    ProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
