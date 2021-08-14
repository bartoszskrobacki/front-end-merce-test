import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [ 
  { path: 'comments', component: CommentsComponent },
  { path: '', component: PostsComponent },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
