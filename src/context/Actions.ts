export const ADD_BLOGPOST = 'ADD_BLOGPOST';
export const DELETE_BLOGPOST = 'DELETE_BLOGPOST';

export interface Action {
    type: typeof ADD_BLOGPOST | typeof DELETE_BLOGPOST,
    id: number
}

export type AddBlogBostAction = { type: typeof ADD_BLOGPOST }
export type DeleteBlogBostAction = { type: typeof DELETE_BLOGPOST, id: number }