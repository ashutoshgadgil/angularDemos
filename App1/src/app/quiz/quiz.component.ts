import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  questions=[
    {"question":"Which is the capital of India?","answer":"New Delhi"},
    {"question":"Which is the capital of Maharashtra?","answer":"Mumbai"}
  ]

  answerSelected:string='';

  answerEntered:string='';

  questionSelected:string='';

  answerGiven:string='';

  checkAns()
  {
    if(this.answerEntered==this.answerSelected)
      this.answerGiven="Correct Answer";
    else
      this.answerGiven="Incorrect Answer";
  }
}
