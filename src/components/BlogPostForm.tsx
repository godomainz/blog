import React, { useContext ,useState } from 'react';
import { Text, TextInput ,StyleSheet, View, Button } from 'react-native';
import { Context, BlogContextType } from '../context/BlogContext';
import { BlogPost } from '../context/BlogPost';

interface Props {
    onSubmit: (title:string, content:string) => any;
    initialValues: BlogPost
}

const BlogPostForm = ( { onSubmit, initialValues }: Props) => {
    const [title, setTitle] = useState(initialValues?.title);
    const [content, setContent] = useState(initialValues?.content);
    const { addBlogPost } = useContext(Context) as BlogContextType;

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)} />
            <Button title="Save Blog" onPress={()=>onSubmit(title,content)}/>
        </View>
    );

}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;