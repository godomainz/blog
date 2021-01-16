import * as actionTypes from './Actions';
import { BlogPost } from './BlogPost';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


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
        case actionTypes.GET_BLOGPOSTS:
            return action.payload;
        default:
            return state;
    }
   
}

const addBlogPost = (dispatch:(action:actionTypes.AddBlogPostAction)=>void) => {
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

const getBlogPosts = ( dispatch:(action: actionTypes.GetBlogPostAction) => void) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({
            type: actionTypes.GET_BLOGPOSTS,
            payload: response.data
        });
    }
}

const deleteBlogPost = (dispatch:(action:actionTypes.DeleteBlogPostAction)=>void) => {
    return (id: number) => {
        dispatch({
            type: actionTypes.DELETE_BLOGPOST,
            id: id
        })
    }
}

const editBlogPost = (dispatch:(action:actionTypes.EditBlogPostAction)=>void) => {
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

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);