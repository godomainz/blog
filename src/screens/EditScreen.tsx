import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const EditScreen = ( {navigation}:any ) => {
    const id = navigation.getParam('id');
    
    return (
        <View>
            <Text>Hello from EditScreen {id}</Text>
        </View>
    );

}

const styles = StyleSheet.create({});

export default EditScreen;