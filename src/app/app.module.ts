import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackgroundModule } from './components/background/background.module';
import { CommentsModule } from './components/comments/comments.module';
import { OverlayModule } from './components/overlay/overlay.module';
import { PostsModule } from './components/posts/posts.module';
import { PostEffects } from './store/effects/posts.effects';

import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/reducers/posts.reducers';
import { reducers } from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BackgroundModule,
    PostsModule,
    CommentsModule,
    OverlayModule,
    StoreModule.forRoot(
      reducers),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
