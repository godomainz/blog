import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';
import { BlogPost } from '../context/BlogPost';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ( { navigation }:any ) => {

    const { state }  = useContext(Context) as BlogContextType;
    const blogPost: BlogPost | undefined = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

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
            <TouchableOpacity onPress={()=>navigation.navigate("Edit")}>
                <EvilIcons name='pencil' size={35} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;