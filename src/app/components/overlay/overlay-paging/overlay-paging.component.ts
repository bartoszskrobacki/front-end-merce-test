import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/models/Poststate';
import { AppState } from 'src/app/store/reducers';
import * as PostActions from './../../../store/actions/posts.actions';

@Component({
  selector: 'app-overlay-paging',
  templateUrl: './overlay-paging.component.html',
  styleUrls: ['./overlay-paging.component.css']
})
export class OverlayPagingComponent implements OnInit {

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


  constructor(private router:Router, private store: Store<AppState>) {
    store.select(state => state).subscribe(x => this.postState = x.postState)
   }

 

  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

  changeToPreviousPost(){
    if(this.postState.actualPostId > 1)
    this.store.dispatch(new PostActions.PreviousPost());
  }

  changeToNextPost(){
    if(this.postState.actualPostId < this.postState.numberOfPosts)
    this.store.dispatch(new PostActions.NextPost());
  }


}
