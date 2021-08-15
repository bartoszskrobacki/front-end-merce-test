import {Post} from './Post'

export interface PostState {
    actualPost: Post;
    postsToDisplay: Post[];
    allPosts: Post[];
    actualPostId: number;
    numberOfPosts: number;
}