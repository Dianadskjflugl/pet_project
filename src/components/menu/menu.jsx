import React, { useContext } from 'react';
import classes from './menu.module.css';
import {AuthContext} from '../../context/index';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/button/button';

const Menu = () => {

	const {isAuth, setIsAuth} = useContext(AuthContext);
	const navigate = useNavigate()

    const logout = () => {
        setIsAuth(false);
		navigate(`/login`) 
        localStorage.removeItem('auth')
    }

	return (
		<header>
        	<div className={classes.header}>
				{isAuth &&
					<div className={classes.button}><MyButton onClick={logout}>выйти </MyButton></div>
				}
        	</div>
      	</header>);
}

export default Menu;