import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  userName: string;
  userPost: string;
  user_form_title = 'User form';

  constructor() { }

  ngOnInit() {
    //this.userName = userName$;
  }

}
