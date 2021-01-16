import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context, BlogContextType } from '../context/BlogContext';

const CreateScreen = ( { navigation }:any ) => {
    const { addBlogPost } = useContext(Context) as BlogContextType;
    return <BlogPostForm 
            onSubmit={(title:string, content:string)=>addBlogPost(title,content, ()=> navigation.navigate('Index'))} />
}

const styles = StyleSheet.create({});

export default CreateScreen;