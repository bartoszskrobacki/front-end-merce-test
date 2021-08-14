import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';

import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/'


  constructor(private http:HttpClient) { }

  getComments(postNumber:string) : Observable<Comment[]> {
    let apiCommentUrl = this.apiUrl + postNumber + "/comments";
    console.log(apiCommentUrl)
    return this.http.get<Comment[]>(apiCommentUrl);
  }
  addComment(comment:Comment) : Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl, comment, httpOptions)
  }
}
