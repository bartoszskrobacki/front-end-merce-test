import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SinglePostContentComponent } from './single-post/single-post-content/single-post-content.component';
import { SinglePostTitleComponent } from './single-post/single-post-title/single-post-title.component';
import { PostService } from 'src/app/services/post.service';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsRoutingModule } from './post-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from 'src/app/store/effects/posts.effects';



@NgModule({
  declarations: [
    PostsComponent,
    SinglePostComponent,
    SinglePostContentComponent,
    SinglePostTitleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PostsRoutingModule,
    EffectsModule.forFeature([PostEffects])
  ],
  exports: [
    PostsComponent,
    SinglePostContentComponent,
    SinglePostTitleComponent
  ],
  providers:[
    PostService
  ]
})
export class PostsModule { }
