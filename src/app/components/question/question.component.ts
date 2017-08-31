import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question')
  question: Question;

  @Output('removedQuestion') removedQuestion = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

  removeQuestion(question: Question) {
    this.removedQuestion.emit(question);
  }

}
