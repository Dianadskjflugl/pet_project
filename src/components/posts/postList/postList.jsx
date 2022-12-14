import React from 'react';
import '../../../App.css'
import {TransitionGroup, CSSTransition} from "react-transition-group";
import PostItem from './postItem/postItem';

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="item">
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
