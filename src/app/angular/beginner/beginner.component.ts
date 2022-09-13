import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.scss']
})
export class BeginnerComponent implements OnInit {

  questionSet = [
    {
      title: 'Basic Terminology',
      questions: [
        {
          id: 1, questionTitle: 'What Is Angular?', image: '', annswer: `
        Angular is the most popular web development framework for developing mobile apps as well as desktop applications.
The angular framework is also utilized in the cross-platform mobile development called IONIC and so it is not limited to web apps only.
Angular is an open source framework written and maintained by the angular team at Google and the Father of Angular is Misko Hevery.
Angular is written in TypeScript and so it comes with all the capabilities that typescript offers.
`},
        { id: 1, questionTitle: 'What Are Components in Angular?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is the minimum definition of a component?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is a module and what does it contains?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is a service and why will you use it?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is a promise? Explain it in simple words.', image: '', annswer: '' },
        { id: 1, questionTitle: 'What are the life cycle hooks for component and directives?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is pipes?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is a service and why would you use it?', image: '', annswer: '' },
        { id: 1, questionTitle: 'What is a dumb component? and what are the benefits of dumb component?', image: '', annswer: '' }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
