import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Topic{
  constructor(
    public id:string,
    public name:string,
    public description:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Topic[]>('http://localhost:8080/topics');
  }
}