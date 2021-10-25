import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  constructor(public clientService:ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(clientForm: NgForm){

    //console.log(clientForm.value);
    if(clientForm.value.id==null){
      this.clientService.createClient(clientForm.value).subscribe((response) => {
        this.router.navigate(["/"]);
      });
    }else{
      this.clientService.updateClient(clientForm.value.id,clientForm.value).subscribe((response) => {
        this.router.navigate(["/"]);
      });
    }

    this.resetForm(clientForm);

    //this.router.navigate(['']);
  }

  resetForm(productosForm: NgForm){
    if(productosForm != null){
      productosForm.reset();
      this.clientService.selectClient=new Client();
    }
  }

}
