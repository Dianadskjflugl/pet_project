import React, { useContext } from 'react';
import classes from './login.module.css';
import MyButton from '../../UI/button/button';
import MyInput from '../../UI/input/MyInput';
import { AuthContext } from '../../context/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        navigate(`/posts`)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className={classes.login}>
            <div className={classes.block}>
                <h1>Авторизация</h1>
                <form onSubmit={login}>
                    <div className={classes.input}><MyInput type="text" placeholder="Введите логин" /></div>
                    <div className={classes.input}><MyInput type="password" placeholder="Введите пароль" /></div>
                    <div className={classes.button}><MyButton>Войти</MyButton></div>
                </form>
            </div>
        </div>
    );
};

export default Login;