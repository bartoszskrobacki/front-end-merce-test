import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
