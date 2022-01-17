import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any=null;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    console.log('inside profile');
    
    
    this.user=this.loginService.getUser();
    console.log(this.user);
  }

}
