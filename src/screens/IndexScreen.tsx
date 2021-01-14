import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const value = useContext(BlogContext);

    return (
        <View>
            <Text>Hello from IndexScreen</Text>
            <Text>{value}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default IndexScreen;