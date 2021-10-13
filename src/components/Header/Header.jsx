import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src= "https://image.shutterstock.com/image-vector/minimal-modern-alphabet-fonts-typography-600w-1802965939.jpg"/>

            <div className={s.loginBlock}>
                {props.isAuth ?  props.login :
                <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header