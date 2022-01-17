import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.css'],
})
export class QuizUpdateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private categoryService:CategoryServiceService,
    private router:Router
  ) {}

  qId = 0;
  quiz: any=[];
  categories:any=[]

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    this.quizService.getSingleQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(typeof(this.quiz.active));
        // alert(this.quiz)
      },
      (error) => {
        console.log(error);

        Swal.fire('error', 'Error occured while loadingthe quiz', 'error');
      }
    );
  
    this.categoryService.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire('Error','Error occured while loading the category','error')
      }
    )
  }

  updateForm(){
    this.quizService.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success','Quiz successfully updated','success');
        this.router.navigate(['admin/quizzes']);
      },
      (error)=>{
        console.log(error);
        
        Swal.fire('Error','Something went wrong  ','error');
      }

    )

  }
}
