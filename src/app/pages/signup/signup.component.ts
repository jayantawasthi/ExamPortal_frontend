import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  public User = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    // console.log(this.User);
    if (this.User.username == ' ' || this.User.username == null || this.User.username.length==0) {
      Swal.fire('Error', 'Username is required !! Please Try Again ', 'error');
      // alert('user is required');
      return;
    } else {
      //add user
      this.userService.addUser(this.User).subscribe(
        (data) => {
          Swal.fire('success', 'User Successfully registered!! ', 'success');
          this.router.navigate(['login']);
        },
        (error) => {
          console.log(error);
          Swal.fire('Erro', 'Somthing went wrong!! Please Try Again ', 'error');
        }
      );
    }
  }
}
