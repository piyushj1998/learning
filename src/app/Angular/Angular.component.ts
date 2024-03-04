import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Angular',
  templateUrl: './Angular.component.html',
  styleUrls: ['./Angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }
angular :any;
  ngOnInit() {
    this.angular  = [
      {
        title:"Angular",
        description:`Angular is Frontend application`
      }

    ];
  }

}
