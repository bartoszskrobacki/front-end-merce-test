import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/services/comment.service';
import { UiService } from 'src/app/services/ui.service';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

   comments: Comment[] = []
  subscription!: Subscription;
  showCommentSection: boolean = true;
  constructor(private commentService : CommentService, private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showCommentSection = value));
  }

  @Input() postId: string = '';

  ngOnInit(): void {
    this.commentService.getComments(this.postId).subscribe((comments) => this.comments = comments);
  }

  addComment(comment:Comment){
    this.commentService.addComment(comment).subscribe((comment) => (this.comments.push(comment)));
    this.uiService.toogleShowCommentSection();
  }

  toogleShowPost(){ 
    this.uiService.toogleShowCommentSection();
  }

}
