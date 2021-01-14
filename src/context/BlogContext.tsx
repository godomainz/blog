import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BlogContext = React.createContext(null);

export const BlogProvider = ( {children}:any ) => {
    return <BlogContext.Provider value={null}>{children}</BlogContext.Provider>
}


