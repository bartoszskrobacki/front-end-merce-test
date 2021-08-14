import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackgroundModule } from './components/background/background.module';
import { CommentsModule } from './components/comments/comments.module';
import { OverlayModule } from './components/overlay/overlay.module';
import { PostsModule } from './components/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackgroundModule,
    PostsModule,
    CommentsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
