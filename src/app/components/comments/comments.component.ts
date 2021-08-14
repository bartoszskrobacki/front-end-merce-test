import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  nav !: Navigation;
  showPost!: boolean;
  subscription!: Subscription;
  post: Post = 
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
  constructor(private uiService:UiService, public router: Router) { 
    
    
    this.post = this.router.getCurrentNavigation()?.extras?.state?.post as Post;
    
  }

  ngOnInit(): void {
   
  }

}
