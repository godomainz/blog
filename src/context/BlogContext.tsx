import React from 'react';
import { BlogPost } from './BlogPost';


const BlogContext = React.createContext({});

export const BlogProvider = ( {children}:any ) => {

    const blogPosts:BlogPost[] = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'}
    ];

    return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
}

export default BlogContext;