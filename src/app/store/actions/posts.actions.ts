import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/Post';

export const GET_POST           = 'GET_POST';
export const GET_POST_SUCCESS   = 'GET_POST_SUCCESS';
export const GET_POST_ERROR  = 'GET_POST_ERROR';
export const NEXT_POST = 'NEXT_POST';
export const PREVIOUS_POST = 'PREVIOUS_POST';
export const ACTUAL_POST = 'ACTUAL_POST';

export class GetPost implements Action {
  readonly type = GET_POST;
  constructor() {}
}

export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class ChooseActualPost implements Action {
  readonly type = ACTUAL_POST;
  constructor(public payload: number) {}
}


export class NextPost implements Action {
    readonly type = NEXT_POST;
    constructor() {}
  }

  export class PreviousPost implements Action {
    readonly type = PREVIOUS_POST;
    constructor() {}
  }





export type All
  = GetPost
  | GetPostSuccess 
  | NextPost 
  | PreviousPost
  | ChooseActualPost
  ;