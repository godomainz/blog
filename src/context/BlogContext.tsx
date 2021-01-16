import * as actionTypes from './Actions';
import { BlogPost } from './BlogPost';
import createDataContext from './createDataContext';


export interface BlogContextType {
    state: BlogPost[];
    addBlogPost: (title:string, content: string) => void;
    deleteBlogPost: (id: number) => void;
}

const blogReducer = (state: BlogPost[], action: actionTypes.Action):BlogPost[] => {
    switch (action.type){
        case actionTypes.ADD_BLOGPOST:
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
        case actionTypes.DELETE_BLOGPOST:
            return state.filter((blogPost)=> blogPost.id !== action.id ); 
        default:
            return state;
    }
   
}

const addBlogPost = (dispatch:(action:actionTypes.AddBlogBostAction)=>void) => {
    return (title:string, content: string) => {
        dispatch({
            type: actionTypes.ADD_BLOGPOST,
            payload: {
                title,
                content
            }
        })
    }
}

const deleteBlogPost = (dispatch:(action:actionTypes.DeleteBlogBostAction)=>void) => {
    return (id: number) => {
        dispatch({
            type: actionTypes.DELETE_BLOGPOST,
            id: id
        })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);