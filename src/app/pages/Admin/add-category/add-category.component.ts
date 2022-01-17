import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service:CategoryServiceService,private router:Router) { }

  category={
    title:'',
    description:''
  }

  ngOnInit(): void {
  }


  formSubmit(){
    if (this.category.title.trim()=='' ||  this.category.title.length<5 || this.category.title==null) {
      Swal.fire('Error !!',"Title field should not empty",'error');     
    }
    else{
      this.service.addCategory(this.category).subscribe(
        (data:any)=>{
          Swal.fire('Success',"Successfully added new category",'info');
          this.router.navigate(['/admin/categories'])
          this.category.title='',
          this.category.description=''

        },
        (error)=>{
          Swal.fire('Error !!',"Something went wrong ! try again",'error')
        }

      );
    }
  }


}
