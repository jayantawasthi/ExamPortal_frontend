import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      cId: '',
      title: '',
    },
  ];

  QuizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: '',
    category: {
      cId: '',
      
    },
  };

  constructor(
    private categoriesService: CategoryServiceService,
    private quizService: QuizService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.categoriesService.categories().subscribe(
      (data: any) => {
        // console.log(data);
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire(
          'Error',
          'Error while loading categories from server',
          'error'
        );
      }
    );
  }

  addQuiz() {
    console.log(this.QuizData);

    if (
      this.QuizData.title.length == 0 ||
      this.QuizData.maxMarks.length == 0 ||
      this.QuizData.numberOfQuestions.length == 0 
     ) {
      Swal.fire(
        'Error',
        'Some data is missing !! please fill all data',
        'error'
      );
      return;
    } 
    else {
      //After validation

      this.quizService.addQuiz(this.QuizData).subscribe(
        (data: any) => {
          Swal.fire('Success', 'Quiz Successfully Added', 'success');
          this.router.navigate(['/admin/quizzes'])
          this.QuizData = {
            title: '',
            description: '',
            maxMarks: '',
            numberOfQuestions: '',
            active: '',
            category: {
              cId: '',
            },
          };
        },
        (error) => {
          console.log(error);
          Swal.fire(
            'Error',
            'Error occured while loading quiz from server',
            'error'
          );
        }
      );
    }
  }
}
