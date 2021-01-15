import * as actionTypes from './Actions';
import { BlogPost } from './BlogPost';
import createDataContext from './createDataContext';


export interface BlogContextType {
    state: BlogPost[];
    addBlogPost: () => void;
}

const blogReducer = (state: BlogPost[], action: actionTypes.Action):BlogPost[] => {
    switch (action.type){
        case actionTypes.ADD_BLOGPOST:
            return [...state, { title: `Blog Post#${state.length + 1}` }];
        default:
            return state;
    }
   
}

const addBlogPost = (dispatch:(action:actionTypes.AddBlogBostAction)=>void) => {
    return () => {
        dispatch({
            type: actionTypes.ADD_BLOGPOST
        })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);