import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostState } from 'src/app/models/Poststate';
import { UiService } from 'src/app/services/ui.service';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  nav !: Navigation;
  showPost!: boolean;
  subscription!: Subscription;
  postState : PostState = {
    actualPost: { 
        "userId": 1,
        "id": 4,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    postsToDisplay: [],
    allPosts: [],
    actualPostId: 1,
    numberOfPosts: 1,
};
  constructor(private uiService:UiService,  private store: Store<AppState>) { 
    
    store.select(state => state).subscribe(x => x.postState ? this.postState = x.postState : x.postState )
   
  }

  ngOnInit(): void {
   
  }

}
