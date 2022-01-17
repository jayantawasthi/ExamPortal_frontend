import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isloggedIn = false;
  user: any;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.isloggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();    
    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      this.isloggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
      console.log(this.user);
    });
  }

  public logout() {
    console.log('inside navbar');

    this.loginService.logout();
    // this.loginService.loginStatusSubject.next(false);

    window.location.reload();
    // this.router.navigate(['login']);
  }
}
