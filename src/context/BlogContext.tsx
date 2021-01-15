import React, { Reducer, useReducer } from 'react';
import * as actionTypes from './Actions';
import { BlogPost } from './BlogPost';


export interface BlogContextType {
    data: BlogPost[];
    addBlogPost: () => void;
}

const BlogContext = React.createContext({});

const blogReducer = (state: BlogPost[], action: actionTypes.Action):BlogPost[] => {
    switch (action.type){
        case actionTypes.ADD_BLOGPOST:
            return [...state, { title: `Blog Post#${state.length + 1}` }];
        default:
            return state;
    }
   
}

export const BlogProvider = ( {children}:any ) => {

    const [blogPosts, dispatch] = useReducer<Reducer<BlogPost[], actionTypes.Action>>(blogReducer,[]);

    const addBlogPost = () => {
        dispatch({
            type: actionTypes.ADD_BLOGPOST
        })
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
}

export default BlogContext;