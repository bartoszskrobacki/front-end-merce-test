import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [ 

 
  {
    path: '',
    loadChildren: () => import('./components/comments/comments.module').then(m => m.CommentsModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)
  },
 
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
