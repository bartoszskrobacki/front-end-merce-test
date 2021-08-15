import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostState } from 'src/app/models/Poststate';
import { PostService } from 'src/app/services/post.service';
import { AppState } from 'src/app/store/reducers';
import * as PostActions from './../../store/actions/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  showPost: boolean = false;
  postState : PostState = {
    actualPost: { 
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    postsToDisplay: [],
    allPosts: [],
    actualPostId: 1,
    numberOfPosts: 1,
};

 

  constructor(private postService : PostService, private store: Store<AppState>) {
    
    store.select(state => state).subscribe(x => this.postState = x.postState)
  }

  ngOnInit(): void {   
    this.store.dispatch(new PostActions.GetPost());
  }
  

}
