import { Injectable } from '@angular/core';
import { Question } from "../models/question";

@Injectable()
export class DataService {
  questions: Question[];
  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'Brad',
        hide: true
      },
      {
        text: 'What is your fav color?',
        answer: 'Black',
        hide: true
      },
      {
        text: 'What is your afv language?',
        answer: 'Javascript',
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
  }

  removeQuestion(question:Question){
    for (let index = 0; index < this.questions.length; index++) {
      if (question == this.questions[index]) {
        this.questions.splice(index,1);
      }
      
    }
  }

}
