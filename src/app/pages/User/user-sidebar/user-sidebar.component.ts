import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(private categoroyService:CategoryServiceService,private route:ActivatedRoute) { }

  categories:any=[];
  catid:any;
  pageNumber:number=0;
 
  ngOnInit(): void {
    
    
    
    this.categoroyService.categories().subscribe(
      (data:any)=>{
        console.log(this.catid);
        
        console.log(data);
        this.categories=data
        
      },
      (error)=>{
        Swal.fire('Error','Error while loading categories','error')
      }

    )

  }

}
