import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/Post';
import { AppState } from 'src/app/store/reducers';
import * as PostActions from './../../../store/actions/posts.actions';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() post: Post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
  @Input() imgSrc: string = "../../../../assets/icons/upright_arrow_icon.png";
  

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  checkPostDetails() {
    this.store.dispatch(new PostActions.ChooseActualPost(this.post.id));
  }

}
