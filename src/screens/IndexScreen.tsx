import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from 'react-native';
import  { Context , BlogContextType } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
 
const IndexScreen = ({navigation}:any) => {
    console.log(navigation);

    const {state, addBlogPost, deleteBlogPost}  = useContext(Context) as BlogContextType;

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList keyExtractor={(blogPost)=>blogPost.id.toString()} data={state} renderItem={({item})=>{
                return  (
                            <TouchableOpacity onPress={()=>navigation.navigate("Show", { id: item.id })}>
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                        <Feather style={styles.icon} name="trash"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        );
            }}/>
        </View>
    );

}

IndexScreen.navigationOptions = ( { navigation }: any ) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                <Feather name='plus' size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        width: 24
    }
});

export default IndexScreen;