import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-display-topics',
  templateUrl: './display-topics.component.html',
  styleUrls: ['./display-topics.component.css']
})
export class DisplayTopicsComponent implements OnInit {

  topics:string[];
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.topics=response;
}

}
