import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.css']
})
export class ProductoNewComponent implements OnInit {

  productoForm: FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {

    this.productoForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      serie: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      disponible: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      date_created: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  public save(): void {
    if (this.productoForm.valid) {
      this.activeModal.close(this.productoForm.value);
    }

  }

}
