import { LocationStrategy } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css'],
})
export class StartQuizComponent implements OnInit {
  constructor(
    private locationStr: LocationStrategy,
    private questionService:QuestionService,
    private route:ActivatedRoute
    
    ) {}

    qid:any
    questions:any=[
      {
        quiz:''
      }
    ]
    pageNumber:any

  ngOnInit(): void {
    this.preventBackButton();
    this.qid=this.route.snapshot.params.quizId
    // this.pageNumber=this.route.snapshot.params.pageNumber
    // console.log(this.pageNumber);
    

    // console.log(this.qid);


    this.questionService.getQuestionsQuiz_StartQuiz(this.qid).subscribe(
      (data:any)=>{
        console.log(data); 
        this.questions=data       
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','failed to load questions')
        
      }
    )
    
  }

  preventBackButton() {
    history.pushState(null, 'null', location.href);
    this.locationStr.onPopState(() => {
      history.pushState(null, 'null', location.href);
    });
  }
}
