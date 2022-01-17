import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpler';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }


  //load all the categories
  public categories(){
    return this.http.get(`${baseUrl}/category/`);
  }

  //add new category
  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/`,category)
  }

  //delete  category
  public deleteCategory(qid:any){
    return this.http.delete(`${baseUrl}/category/${qid}`);
  }
}
