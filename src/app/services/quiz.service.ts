import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpler';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( public http:HttpClient) { }

  //get all the quizess
  public quizzes(pagenumber:number)
  {
    console.log('inside quiz service');
    
   return this.http.get(`${baseUrl}/quiz/user/${pagenumber}`);

  }

  //add the quiz to database
  public addQuiz(quizData:any){
    return this.http.post(`${baseUrl}/quiz/`,quizData);
  }

  //delete the quiz 
  public deleteQuiz(qId:any){
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get the single quiz
  public getSingleQuiz(qid:any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  //update quiz
  public updateQuiz(quiz:any){    
    return this.http.put(`${baseUrl}/quiz/`,quiz)
  }
 
  //get  quizzes of given category
  public getQuizzesOfCategory(quizId:any){
    return this.http.get(`${baseUrl}/quiz/categories/${quizId}`);
  }

  
  // get active quizzes 
  public getActiveQuizzes(id:number){
    return this.http.get(`${baseUrl}/quiz/active/${id}`)
  }

  //get active quizzes of given category
  public getActiveQuizzesOfCategory(catId:number,pagenumber:any){

    return this.http.get(`${baseUrl}/quiz/category/active/${catId}/${pagenumber}`)

  }
  //get active quizzes of given category
  // public getActiveQuizzesOfCategory(catId:number){

  //   return this.http.get(`${baseUrl}/quiz/category/active/${catId}`)

  // }
  

}
