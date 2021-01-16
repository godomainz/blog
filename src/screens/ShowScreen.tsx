import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';
import { BlogPost } from '../context/BlogPost';
import { EvilIcons } from '@expo/vector-icons';

let blogPost: BlogPost | undefined;

const ShowScreen = ( { navigation }:any ) => {

    const { state }  = useContext(Context) as BlogContextType;
    blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost?.title}</Text>
            <Text>{blogPost?.content}</Text>
        </View>
    );

}

ShowScreen.navigationOptions = ( { navigation }: any ) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate("Edit", { id: blogPost?.id })}>
                <EvilIcons name='pencil' size={35} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;