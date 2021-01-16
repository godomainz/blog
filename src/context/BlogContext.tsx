import * as actionTypes from './Actions';
import { BlogPost } from './BlogPost';
import createDataContext from './createDataContext';


export interface BlogContextType {
    state: BlogPost[];
    addBlogPost: (title:string, content: string, callback:()=>any) => void;
    deleteBlogPost: (id: number) => void;
    editBlogPost: (id: number,itle:string, content: string, callback:()=>any) => void;
}

const blogReducer = (state: BlogPost[], action: actionTypes.Action):BlogPost[] => {
    switch (action.type){
        case actionTypes.ADD_BLOGPOST:
            return [...state, {id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
        case actionTypes.EDIT_BLOGPOST:
            return state.map((blogPost)=> blogPost.id === action.payload.id ? action.payload : blogPost );
        case actionTypes.DELETE_BLOGPOST:
            return state.filter((blogPost)=> blogPost.id !== action.id );
        
        default:
            return state;
    }
   
}

const addBlogPost = (dispatch:(action:actionTypes.AddBlogBostAction)=>void) => {
    return (title:string, content: string, callback?:()=>any) => {
        dispatch({
            type: actionTypes.ADD_BLOGPOST,
            payload: {
                title,
                content
            }
        });

        if(callback){
            callback();
        }
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

const editBlogPost = (dispatch:(action:actionTypes.EditBlogBostAction)=>void) => {
    return (id:number, title:string, content: string, callback?:()=>any) => {
        dispatch({
            type: actionTypes.EDIT_BLOGPOST,
            payload: {
                id,
                title,
                content
            }
        });
        
        if(callback){
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{ id: 1, title: 'Test Post', content: 'Test Content' }]);