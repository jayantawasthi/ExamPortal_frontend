import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {


  quizId:any;
  title:any;
  questions=
    {
    quiz:{qId:'',},
    content:'', 
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
 }
  constructor(private route:ActivatedRoute,private questionService:QuestionService,private router:Router) { }
  
  

  ngOnInit(): void {

    this.quizId= this.route.snapshot.params.id
    this.title= this.route.snapshot.params.title
    this.questions.quiz['qId']=this.quizId;
  }

  AddQuestions(){

    if(this.questions.content.length<5 || this.questions.option1.length<0 || this.questions.option2.length<0 ||this.questions.option3.length<0 || this.questions.option4.length<0 || this.questions.answer.length<0)
    {
      Swal.fire('Error','somthing is missing !! please fill the all field','error')
      return;
    }
    else{

      this.questionService.addQuestions(this.questions).subscribe(
        (data:any)=>{
          Swal.fire('Success','Questions Successfully added','success');
          this.router.navigate(['admin/view-questions/'+this.quizId+'/'+this.title])

        },
        (error)=>{
          Swal.fire('Error','somthing went wrong while adding questions','error')
        }
      )
    }



  }
}
