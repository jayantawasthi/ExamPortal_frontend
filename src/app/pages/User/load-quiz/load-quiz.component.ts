import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router:Router
  ) {}

  catid: number = 0;
  quizzes: any;
  id: any;
  Page: any = [];
  totalpage: any = [this.Page];
  totalElements: any;

  privious: any;
  next: any;
  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      //getting category id from url
      this.catid = parseInt(params.catId);
      // console.log(typeof this.catid);

      //getting no. of page  from url
      this.id = parseInt(params.pid);

      //converting page no. into int
      // this.id=parseInt(this.id);

      this.privious = this.id - 1;
      this.next = this.id + 1;

      if (this.catid == 0  && this.id>=0) {
        this.quizService.getActiveQuizzes(this.id).subscribe(
          (data: any) => {
            this.quizzes = data.content;
            this.totalElements = data.totalElements;
            this.Page = data.totalPages;
            // console.log(this.Page);

            for (var i = 0; i < this.Page; i++) {
              this.totalpage[i] = i;
            }
          },
          (error) => {
            Swal.fire(
              'Error',
              'Error occured while loading thie all quizzes',
              'error'
            );
          }
        );
      }
       else {
        //  this.id=0
        //  console.log(this.id);
        
        if(this.catid>0 && this.id>=0){
          this.quizService
          .getActiveQuizzesOfCategory(this.catid, this.id)
          .subscribe(
            (data: any) => {
              this.quizzes = data.content;
              this.totalElements = data.totalElements;
              this.totalpage = [];
              this.Page = data.totalPages;
              // this.totalpage=data.totalPages
              // console.log(this.totalpage.size());

              console.log(this.Page);

              for (var i = 0; i < this.Page; i++) {
                this.totalpage[i] = i;
              }
            },
            (error) => {
              console.log(error);
              Swal.fire(
                'Error',
                'Error occured while loading the quizzes',
                'error'
              );
            }
          );

        }
       
      }
    });
  }

}
