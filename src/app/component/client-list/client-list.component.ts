import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList:any;
  clientes:any;

  constructor(private clientService:ClientService,private router: Router) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    this.clientService.getClients().subscribe((clientes:any)=>{
      console.log(clientes);
      this.clientList=clientes;
    })
  }

  onEdit(client:Client){
    console.log(client);
    this.clientService.selectClient=Object.assign({},client);
    this.router.navigate(["addclient"]);
  }

  onDelete(id:number){
    console.log(id);
    if(confirm("Estas seguro que vas a eliminar este producto?")){
      this.clientService.deleteClient(id).subscribe((response) => {
        //console.log(response);
        //this.router.navigate(["/"]);
        this.onList();
      });
    }
  }
}
