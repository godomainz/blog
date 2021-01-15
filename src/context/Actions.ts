import { BlogPost } from './BlogPost';

export const ADD_BLOGPOST = 'ADD_BLOGPOST';

export interface Action {
    type: typeof ADD_BLOGPOST
}

export type AddBlogBostAction = { type: typeof ADD_BLOGPOST, payload: BlogPost }
