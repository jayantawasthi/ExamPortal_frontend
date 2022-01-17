import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpler';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  //get all questions
  public getQuestionsQuiz(qid: any) {
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  //get all questions for user
  public getQuestionsQuiz_StartQuiz(qid: any) {
    
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  //get single questions
  public getSingleQuestion(qid: any) {
    return this.http.get(`${baseUrl}/question/${qid}`);
  }

  //add questions
  public addQuestions(questions: any) {
    return this.http.post(`${baseUrl}/question/`, questions);
  }

  //delete questions
  public deleteQuestions(quesId: any) {
    return this.http.delete(`${baseUrl}/question/${quesId}`);
  }

  //update questions
  public updateQuestions(question: any) {
    return this.http.put(`${baseUrl}/question/`, question);
  }
}
