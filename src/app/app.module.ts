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
import { ProductoNewComponent } from './component/producto/components/forms/producto-new/producto-new.component';
import { ProductoEditComponent } from './component/producto/components/forms/producto-edit/producto-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientListComponent,
    ClientAddComponent,
    ProductoListComponent,
    ProductoComponent,
    ProductoNewComponent,
    ProductoEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
