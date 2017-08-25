import { Injectable } from '@angular/core';
import { Question } from "../models/question";

@Injectable()
export class DataService {
  questions: Question[];
  constructor() { 
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'Brad',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your fav color?',
    //     answer: 'Black',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your afv language?',
    //     answer: 'Javascript',
    //     hide: true
    //   }
    // ];
  }

  // get questions from locall storage
  getQuestions(){
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // add qustion to local storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      //push new question
      questions.unshift(question);
      //set new array to localstorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);
      //re set local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }

  }

  //remove individual question from local storage
  removeQuestion(question:Question){
    for (let index = 0; index < this.questions.length; index++) {
      if (question == this.questions[index]) {
        this.questions.splice(index,1);
        localStorage.setItem('questions', JSON.stringify(this.questions));

      }
      
    }
  }

}
