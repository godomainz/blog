export const ADD_BLOGPOST = 'ADD_BLOGPOST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
export const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

export const GET_BLOGPOSTS = 'GET_BLOGPOSTS';

export interface Action {
    type: typeof ADD_BLOGPOST | typeof DELETE_BLOGPOST | typeof EDIT_BLOGPOST | typeof GET_BLOGPOSTS,
    id: number,
    payload: { id:number ,title: string, content: string } | any
}

export type AddBlogPostAction = { type: typeof ADD_BLOGPOST, payload: { title: string, content: string } };
export type DeleteBlogPostAction = { type: typeof DELETE_BLOGPOST, id: number };
export type EditBlogPostAction = { type: typeof EDIT_BLOGPOST, payload: { id:number, title: string, content: string } }
export type GetBlogPostAction = { type: typeof GET_BLOGPOSTS, payload: any }