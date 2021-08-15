import { Injectable }                 from '@angular/core';
import { createEffect, Actions, ofType }            from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {of} from 'rxjs'
import { EMPTY } from 'rxjs';


import { PostService } from 'src/app/services/post.service';

import * as postActions  from './../actions/posts.actions';
type Action = postActions.All;

@Injectable()
export class PostEffects{

    constructor(private actions$: Actions,
        private postService: PostService) {}


        loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postActions.GET_POST),
            mergeMap(() => this.postService.getPosts()
              .pipe(
                map(posts => ({ type: postActions.GET_POST_SUCCESS, payload: posts })),
                catchError(() => EMPTY)
              )
            )
          )
      );

}