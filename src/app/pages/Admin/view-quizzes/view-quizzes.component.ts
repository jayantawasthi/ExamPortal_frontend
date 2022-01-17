import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  constructor(public _quiz: QuizService, private route: ActivatedRoute) {}

  quizzes = [
    {
      qId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active:'',
      category: {
        title: '',
      },
    },
  ];

  //current pagenumber
  pageNumber: number = 0;
  privious: number = 0;
  Next: number = 0;

  //total page received from back-end
  receivedTotalPages: any = [];

  //total page
  totalPage: any = [this.receivedTotalPages];

  //check wheather the quiz is active or not
  //check wheather the quiz is active or not
  activeORdeactive: boolean = true;
  
  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pageNumber = parseInt(params.id);
      this.privious = this.pageNumber - 1;
      // console.log(`privious ${this.privious}`);

      this.Next = this.pageNumber + 1;
      // console.log(`next ${this.Next}`);

      if (this.pageNumber >= 0) {
        this._quiz.quizzes(this.pageNumber).subscribe(
          (data: any) => {
            // console.log(data);
            this.quizzes = data.content;
            console.log(this.quizzes);
            
            this.receivedTotalPages = data.totalPages;
            console.log(this.receivedTotalPages);
            
            // (this.quizzes[5].active=='true')?this.activeORdeactive='Active':this.activeORdeactive='De-Active';
            
            
            
            for (let index = 0; index < this.receivedTotalPages; index++) {
              this.totalPage[index] = index;
            }
            console.log(this.totalPage);
          },
          (error) => {
            console.log(error);
            Swal.fire('error', 'error in loading data', 'error');
          }
        );
      }
    });
  }

  deleteQuiz(quizId: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure to delete this Quiz?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._quiz.deleteQuiz(quizId).subscribe(
          (data: any) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qId != quizId);
            Swal.fire('Success', 'Quiz successfully Deleted', 'success');
          },
          (error) => {
            Swal.fire(
              'Error',
              'Error occured while deleting the Quiz !!!',
              'error'
            );
          }
        );
      }
    });
  }
}
