import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  myName: string;
  myScore: number;
  myImage?: string;
  myLink?: string;

  constructor() { }

  ngOnInit() {
    this.myName = 'Suchat';
    this.myScore = 90;
    this.myImage = 'http://lorempixel.com/400/200/sports/1/';
    this.myLink = 'http://www.google.com';
  }

  onUserAction(e) {
    alert('You ${e.type} the button at (${e.clientX}, ${e.clientY})');
    // console.log('user Click the button from webpage!');
  }

}
