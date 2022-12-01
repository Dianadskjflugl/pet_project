import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Loader from './UI/loader/loader';
import Login from './components/login/login';
import Error from './components/error/error';
import PostInfo from './components/posts/posts';
import PostIdPage from './components/profilePage/profilePage';
import { AuthContext } from './context/index';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route index element={<PostInfo />} />
                <Route path='posts' element={<PostInfo />} />
                <Route path='posts/:id' element={<PostIdPage />} />
            </Routes>
            :
            <Routes>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Error />} />
            </Routes>
    );
};

export default AppRouter;
