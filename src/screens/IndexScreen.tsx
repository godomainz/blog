import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import BlogContext, { BlogContextType } from '../context/BlogContext';

const IndexScreen = () => {

    const {data, addBlogPost}  = useContext(BlogContext) as BlogContextType;

    return (
        <View>
            <Text>Hello from IndexScreen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList keyExtractor={(blogPost)=>blogPost.title} data={data} renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default IndexScreen;