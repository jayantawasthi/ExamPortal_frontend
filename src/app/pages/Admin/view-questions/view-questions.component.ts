import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css'],
})
export class ViewQuestionsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router:Router
  ) {}

  qId: any;
  qTitle: any;

  question: any = [];


  ngOnInit(): void {
    this.qId = this.route.snapshot.params.id;
    this.qTitle = this.route.snapshot.params.title;
    
   this.questionService.getQuestionsQuiz(this.qId).subscribe(
      (data: any) => {
        this.question = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error while loading the questions from server');
      }
    );
  }

  //delete question

  deleteQn(QnId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure to delete Question?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestions(QnId).subscribe(
          (data: any) => {
            Swal.fire('Success', 'Questioin Successfully deleted', 'success');
            this.question=this.question.filter((q:any)=>q.quesId=!QnId);
            
            this.router.navigate(['/admin/quizzes'])

            
          },
          (error) => {
            Swal.fire(
              'Error',
              'Failed to delete the question from server',
              'error'
            );
          }
        );
      }
    });
  }
}
