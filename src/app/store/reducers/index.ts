
import { ActionReducerMap } from '@ngrx/store';
import { PostState } from 'src/app/models/Poststate';
import { postReducer } from './posts.reducers';

export const rootReducer = {};

export interface AppState {
    postState: PostState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    postState: postReducer
};