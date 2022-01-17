import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router:Router
  ) {}

  quizId: any;
  quiz: any = [];

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
      // this.quizId = parseInt(params.qid);
      this.quizId=this.route.snapshot.params.qid
      console.log(this.quizId);
      this.quizService.getSingleQuiz(this.quizId).subscribe(
        (data: any) => {
          this.quiz = data;
          console.log(this.quiz);
        },
        (error: any) => {
          Swal.fire('Error', 'failed to load quiz from server!!', 'error');
        }
      );
    // });
  }

  StartQuiz(){
    Swal.fire({
      title:'Are you sure to start Quiz?',
      showCancelButton:true,
      confirmButtonText:'Start',
      icon:'info'     

    }).then((result)=>{
      if(result.isConfirmed){
          this.router.navigate(['/startQuiz/'+this.quizId])
      }
    })
  }
}
