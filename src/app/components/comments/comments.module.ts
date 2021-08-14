import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { SharedModule } from '../shared/shared.module';
import { PostsModule } from '../posts/posts.module';



@NgModule({
  declarations: [
    CommentsComponent,
    SingleCommentComponent,
    CommentSectionComponent,
    AddCommentFormComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    PostsModule
  ]
})
export class CommentsModule { }
