export const ADD_BLOGPOST = 'ADD_BLOGPOST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
export const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

export interface Action {
    type: typeof ADD_BLOGPOST | typeof DELETE_BLOGPOST | typeof EDIT_BLOGPOST,
    id: number,
    payload: { id:number ,title: string, content: string }
}

export type AddBlogBostAction = { type: typeof ADD_BLOGPOST, payload: { title: string, content: string } };
export type DeleteBlogBostAction = { type: typeof DELETE_BLOGPOST, id: number };
export type EditBlogBostAction = { type: typeof EDIT_BLOGPOST, payload: { id:number, title: string, content: string } }