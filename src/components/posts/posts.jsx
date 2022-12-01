import React, { useEffect, useState, useRef } from 'react';
import PostService from '../../API/postServise';
import { getPagesCount } from '../../utils/pages';
import MyButton from '../../UI/button/button';
import MyLoader from '../../UI/loader/loader';
import PostFilter from './postsFilter/postsFilter';
import MyModal from '../../UI/modal/modal';
import PostForm from './postForm/postForm';
import classes from './posts.module.css';
import { useFetching } from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import PostList from './postList/postList';
import { useObserver } from '../../hooks/useObserver';

const PostInfo = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const limit = 10
    const [pages, setPages] = useState(1)
    const lastElement = useRef()
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, pages) => {
        const response = await PostService.getAll(limit, pages);
        setPosts([...posts ,...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([newPost, ...posts])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts(limit, pages)
    }, [pages])

    useObserver(lastElement, pages <= totalPages, isPostsLoading, () => {
        setPages(pages + 1);
    })

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className={classes.block}>
            <div className={classes.item}>
                <div className={classes.filter}>
                    <h3>сортровка и поиск</h3> 
                    <PostFilter filter={filter} setFilter={setFilter} />
                </div>
                <div className={classes.post}>
                    <h3>Создать пост</h3>
                    <MyButton onClick={() => { setModal(true) }}>новый пост</MyButton>
                </div>
            </div>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
            <div>
                {postError &&
                    <h2>Произошла ошибка ${postError}</h2>
                }
                {isPostsLoading &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}><MyLoader /></div>
                }
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Найденые посты' />
                <div ref={lastElement}/>
            </div>
        </div>
    )
}
export default PostInfo;