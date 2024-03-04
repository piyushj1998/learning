import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {
  constructor() { }
interview :any;
  ngOnInit() {
    this.interview  = [
      {
        title:"Palindrome Number",
        description:``
      },
      {
        title:"Reverse a string",
        description:``
      },
      {
        title:"Fabionic serise",
        description:``
      },
      {
        title:"Armstrong Number",
        description:``
      },
      {
        title:"Second Largest number in an array",
        description:``
      },
      {
        title:"Armstrong Number",
        description:``
      },

    ];
  }

}
