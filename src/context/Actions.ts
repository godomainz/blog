export const ADD_BLOGPOST = 'ADD_BLOGPOST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';

export interface Action {
    type: typeof ADD_BLOGPOST | typeof DELETE_BLOGPOST,
    id: number,
    payload: { title: string, content: string }
}

export type AddBlogBostAction = { type: typeof ADD_BLOGPOST, payload: { title: string, content: string } }
export type DeleteBlogBostAction = { type: typeof DELETE_BLOGPOST, id: number }