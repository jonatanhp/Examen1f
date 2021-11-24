import { Component, OnInit } from '@angular/core';
import {Producto} from '../../model/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProductoNewComponent } from '../../components/forms/producto-new/producto-new.component';
import { ProductoEditComponent } from '../../components/forms/producto-edit/producto-edit.component';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  error:string;
  productosList:Producto[];
  productos:Producto;

  constructor(private productoService:ProductoService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos():void{
    this.productoService.getProducto().subscribe((productos:any)=>{
      console.log(productos);
      this.productosList=productos;

    })
  }

  public onNewProduct($event: any): void {
    if ($event) {
      console.log("nuevo");
      const productForm = this.modalService.open(ProductoNewComponent, {size: 'lg'});
      productForm.componentInstance.title = 'Nuevo Producto';
      productForm.result.then((result) => {
        this.productoService.postProducto(result).subscribe(response => {
          console.log("response");
          this.getProductos();
          if (response.success) {
            console.log("response");
            this.getProductos();
          }
        }, error => {
          this.error = error;
        });

      });
    }
  }

  public delete(id: number): void {
    this.productoService.deleteProducto(id).subscribe(response => {
      
        this.getProductos();
      
    }, error => {
      this.error = error;
    });
  }

  edit(id: number): void {
    this.productoService.getProductoById(id).subscribe((product:any) => {
      this.productos = product;

      const productForm = this.modalService.open(ProductoEditComponent, {size: 'lg'});
      productForm.componentInstance.title = 'Editar Producto';
      productForm.componentInstance.product = this.productos;
      productForm.result.then((result) => {
        if (result) {
          this.productoService.updateProducto(this.productos.id, result).subscribe(resp => {
            if (resp.success) {
              this.getProductos();
            }
          }, error => {
            this.error = error;
          });
        }
        console.log(result);
      });

    }, error => {
      this.error = error;
    });
  }




}
