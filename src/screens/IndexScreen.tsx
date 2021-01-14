import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';
import { BlogPost } from '../context/BlogPost';

const IndexScreen = () => {

    const  blogPosts  = useContext(BlogContext) as BlogPost[];


    console.log(blogPosts);

    return (
        <View>
            <Text>Hello from IndexScreen</Text>
            <FlatList keyExtractor={(blogPost)=>blogPost.title} data={blogPosts} renderItem={({item})=>{
                return <Text>{item.title}</Text>
            }}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default IndexScreen;