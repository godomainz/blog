import React, { useState } from 'react';
import { BlogPost } from './BlogPost';


export interface BlogContextType {
    data: BlogPost[];
    addBlogPosts: () => void;
}

const BlogContext = React.createContext({});

export const BlogProvider = ( {children}:any ) => {

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const addBlogPosts = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length+1}`}]);
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPosts }}>{children}</BlogContext.Provider>
}

export default BlogContext;