import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';
import { BlogPost } from '../context/BlogPost';

const ShowScreen = ( { navigation }:any ) => {

    const { state }  = useContext(Context) as BlogContextType;
    const blogPost: BlogPost | undefined = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost?.title}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ShowScreen;