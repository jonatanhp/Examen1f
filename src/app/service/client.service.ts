import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectClient: Client=new Client();

  constructor(private http:HttpClient) { }

  getClients(){

    //return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/ditto")
    //return this.http.get<any>("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb")
    return this.http.get("http://127.0.0.1:8000/api/clientes/");
    /*
    return this.http.get<any>("http://127.0.0.1:8000/api/clientes/")
    .pipe(map((res:any)=>{
      //console.log(res);
      return res;
    }))*/
  }

  createClient(cliente: Client){
    console.log(cliente);
    return this.http.post('http://127.0.0.1:8000/api/clientes/',cliente);
  }

  updateClient(id:number,cliente:Client){
    return this.http.put('http://localhost:8000/api/clientes/'+id+'/',cliente);
  }

  deleteClient(id:number){
    return this.http.delete('http://localhost:8000/api/clientes/'+id);

  }
}
