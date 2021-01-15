import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';

const IndexScreen = () => {

    const {state, addBlogPost}  = useContext(Context) as BlogContextType;

    return (
        <View>
            <Text>Hello from IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList keyExtractor={(blogPost)=>blogPost.title} data={state} renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default IndexScreen;