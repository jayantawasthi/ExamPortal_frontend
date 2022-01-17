import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component'
 import {MatInputModule} from '@angular/material/input'    
import {MatFormFieldModule} from '@angular/material/form-field' 
import { FormsModule } from '@angular/forms';   
import {HttpClientModule} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import { AuthInterceptorProviders } from './services/auth.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './pages/profile/profile.component'
import {MatListModule} from '@angular/material/list'
import { AdminDashboardComponent } from './pages/Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/Admin/sidebar/sidebar.component';
import { ViewCategoryComponent } from './pages/Admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/Admin/add-category/add-category.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { ViewQuizzesComponent } from './pages/Admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatSelectModule} from '@angular/material/select';
import { QuizUpdateComponent } from './pages/Admin/quiz-update/quiz-update.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { UpdateQuestionsComponent } from './pages/Admin/update-questions/update-questions.component';
import { UserSidebarComponent } from './pages/User/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/User/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/User/instructions/instructions.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { StartQuizComponent } from './pages/User/start-quiz/start-quiz.component';
import { ActiveQuizzesComponent } from './pages/Admin/active-quizzes/active-quizzes.component';
import { DeActiveQuizzesComponent } from './pages/Admin/de-active-quizzes/de-active-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    WelcomeComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    QuizUpdateComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionsComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartQuizComponent,
    ActiveQuizzesComponent,
    DeActiveQuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule

    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
