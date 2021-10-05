import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className ={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Leha</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to='/dialogs/2'>Roma</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to='/dialogs/3'>Anton</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to='/dialogs/4'>Pasha</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to='/dialogs/5'>Denis</NavLink>
                </div>
                <div className= {s.dialog}>
                    <NavLink to='/dialogs/6'>Sasha</NavLink>
                </div>
            </div>
            <div className= {s.messages}>
                <div className= {s.message} > Hi</div>
                <div className= {s.message}  > How is your IT?</div>
                <div className= {s.message}  > Now</div>
            </div>
        </div>
    )
}

export default Dialogs