import React, { useState } from 'react';
import classes from './postForm.module.css';
import MyInput from '../../../UI/input/MyInput';
import MyButton from '../../../UI/button/button';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })


    const addNewPost = (e) => {
        e.preventDefault()
        if (!post.title == '' && !post.body == '') {
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost)
            setPost({ title: '', body: '' })
        }
    }

    return (
        <div className={classes.block}>
            <div className={classes.input}>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder="Название поста"
                />
            </div>
            <div className={classes.input}>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="Описание поста"
                />
            </div>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </div>
    );
};

export default PostForm;