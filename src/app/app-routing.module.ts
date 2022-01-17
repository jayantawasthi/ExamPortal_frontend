import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/Admin/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/Admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/Admin/admin-dashboard/admin-dashboard.component';
import { QuizUpdateComponent } from './pages/Admin/quiz-update/quiz-update.component';
import { UpdateQuestionsComponent } from './pages/Admin/update-questions/update-questions.component';
import { ViewCategoryComponent } from './pages/Admin/view-category/view-category.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/Admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/User/instructions/instructions.component';
import { LoadQuizComponent } from './pages/User/load-quiz/load-quiz.component';
import { StartQuizComponent } from './pages/User/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    // pathMatch:'full',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoryComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes/:id',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'update-quiz/:qid',
        component: QuizUpdateComponent,
      },
      {
        path: 'view-questions/:id/:title',
        component: ViewQuestionsComponent,
      },
      {
        path: 'add-questions/:id/:title',
        component: AddQuestionsComponent,
      },
      {
        path: 'update-question/:quesId',
        component: UpdateQuestionsComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    // pathMatch:'full',
    canActivate: [NormalGuard],
    children: [      
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },     
      {
        path: ':catId/:pid',
        component: LoadQuizComponent,
      }, 
      {
        path:'profile',
        component:ProfileComponent,
      },
      
    ]     
  },
  {
    path:'startQuiz/:quizId',
    component:StartQuizComponent,
    canActivate: [NormalGuard],

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
