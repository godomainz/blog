import React, {  useContext } from 'react';
import { StyleSheet } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import { BlogPost } from '../context/BlogPost';

const EditScreen = ( { navigation }:any ) => {
    const { state, editBlogPost }  = useContext(Context) as BlogContextType;
    const blogPost: BlogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'))!;

    return <BlogPostForm initialValues={blogPost} onSubmit={(title, content)=>editBlogPost(blogPost.id, title, content, ()=>navigation.pop())}/>;

}

const styles = StyleSheet.create({});

export default EditScreen;