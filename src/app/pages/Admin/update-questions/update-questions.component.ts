import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit {

  constructor(private questionService:QuestionService,private route:ActivatedRoute,private router:Router) { }

  questions:any;

  questionId:any


  ngOnInit(): void {
    this.questionId=this.route.snapshot.params.quesId;
    

    this.questionService.getSingleQuestion(this.questionId).subscribe(
      (data)=>{
        this.questions=data
        console.log(this.questions);
        
      },
      (error)=>{
        Swal.fire('Error','Failed to load the question','error')
      }
    )
  
  }
  updateQuestion(){

    this.questionService.updateQuestions(this.questions).subscribe(
      (data)=>{
        Swal.fire('Success','Your Question is successfully updated','success')
        // this.router.navigate(['/admin/view-questions/'+this.questionId])
        // this.router.navigate(['/admin/view-questions/'])
        this.questions=0;

      },
      (error)=>{
        Swal.fire('Error','Failed to update your question sorry!!!','error')
      }
    )



  }

}
