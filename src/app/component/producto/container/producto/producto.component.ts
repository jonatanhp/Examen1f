import { Component, OnInit } from '@angular/core';
import {Producto} from '../../model/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  error:string;
  productosList:Producto[];
  productos:Producto;

  constructor(private productoService:ProductoService ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos():void{
    this.productoService.getProducto().subscribe((productos:any)=>{
      console.log(productos);
      this.productosList=productos;

    })
  }




}
