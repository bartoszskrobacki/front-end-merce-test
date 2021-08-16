

import * as PostActions from './../actions/posts.actions';
import { PostState } from 'src/app/models/Poststate';
import { Actions } from '@ngrx/effects';

export type Action = PostActions.All;



export const initialState: PostState = {
        actualPost: { 
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        postsToDisplay: [],
        allPosts: [],
        actualPostId: 1,
        numberOfPosts: 1,
}


/// Reducer function
export function postReducer(postState: PostState = initialState, action: Action ) {

  switch (action.type) {

    case PostActions.GET_POST:
      return { ...postState };

    case PostActions.GET_POST_SUCCESS:
      return { ...postState,  
        allPosts: action.payload,
        numberOfPosts: action.payload.length,
        postsToDisplay: action.payload.slice(postState.actualPostId-1, postState.actualPostId+5),
    };
    case PostActions.ACTUAL_POST:
      return { ...postState,
        actualPostId: action.payload,
        postsToDisplay: postState.allPosts.slice(action.payload, action.payload+5),
        actualPost: postState.allPosts[action.payload-1]
      };

    case PostActions.NEXT_POST:
        return { ...postState,
              actualPostId: postState.actualPostId + 1,
              postsToDisplay: postState.allPosts.slice(postState.actualPostId, postState.actualPostId+6)
            };
     case PostActions.PREVIOUS_POST:
        return { ...postState,
                actualPostId: postState.actualPostId - 1,
                postsToDisplay: postState.allPosts.slice(postState.actualPostId , postState.actualPostId+6)
                };          
    

  }
}