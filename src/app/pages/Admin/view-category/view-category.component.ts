import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  constructor(private cService: CategoryServiceService) {}

  categories = [
    {
      cId: '',
      title: '',
      description: '',
    },
  ];

  ngOnInit(): void {
    this.cService.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(data);
      },
      (error) => {
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

  DeleteQuiz(qid: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure to delete this category?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cService.deleteCategory(qid).subscribe(
          (data: any) => {
            this.categories = this.categories.filter(
              (categories) => categories.cId != qid
            );
            Swal.fire('Success', 'Category successfully Deleted', 'success');
          },
          (error) => {
            Swal.fire(
              'Error',
              'Error occured while deleting the category !!!',
              'error'
            );
          }
        );
      }
    });

    // this.cService.deleteCategory(qid).subscribe(
    //   (data:any)=>{
    //     this.categories= this.categories.filter((categories)=>categories.cId !=qid);
    //     Swal.fire('Success','Category successfully Deleted','success');
    //   },
    //   (error)=>{

    //     Swal.fire('Error','Error occured while deleting the category !!!','error');
    //   }
    // )
  }
}
