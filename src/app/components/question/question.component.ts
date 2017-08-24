import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Question } from "../../models/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') 
  question:Question;

  constructor() { }

  ngOnInit() {
  }

}
