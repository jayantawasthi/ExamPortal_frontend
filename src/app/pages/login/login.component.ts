import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private snack:MatSnackBar,private router:Router) { }

  loginData={
    username:'',
    password:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.length<2||this.loginData.username==null ||this.loginData.password.length==0 || this.loginData.password==null){

     this.snack.open("invalid username or password ,enter the correct username and password",'',{
       duration:3000,
       horizontalPosition:'center',
       verticalPosition:'bottom'
     })
      return;

    }

    //
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
      // console.log(data);
      
       
        //login
        this.loginService.loginUser(data.token);


        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);

            //redirecct ......admin dashboard or user dashboard
          
            if (this.loginService.getUserRole()=='ADMIN') {  
              
              // window.location.href='/admin'
              this.router.navigate(['admin'])
              this.loginService.loginStatusSubject.next(true);
              
            }
            else if(this.loginService.getUserRole()=='NORMAL'){
              // window.location.href='/user'
              this.router.navigate(['user-dashboard/0/0'])
              this.loginService.loginStatusSubject.next(true);

            }
            else{
              // console.log('inside formdata logout');
              
              this.loginService.logout();
            }
            
          });          
      },
      (error)=>{
        console.log('error');
        console.log(error);
        this.snack.open("Invalid Details !! Try again",'',{
          duration:3000,
          horizontalPosition:'center',
          verticalPosition:'bottom'
        })
        
        
      }
      
    )
    
  }

}
