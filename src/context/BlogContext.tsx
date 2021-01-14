import React from 'react';

const BlogContext = React.createContext(null);

export const BlogProvider = ( {children}:any ) => {
    return <BlogContext.Provider value={null}>{children}</BlogContext.Provider>
}


