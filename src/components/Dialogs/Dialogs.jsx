import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className= {s.message} >{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className ={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name = 'Leha' id = '1'/>
                <DialogItem name = 'Roma' id = '2'/>
                <DialogItem name = 'Anton' id = '3'/>
                <DialogItem name = 'Pasha' id = '4'/>
                <DialogItem name = 'Denis' id = '5'/>
                <DialogItem name = 'Sasha' id = '6'/>
            </div>
            <div className= {s.messages}>
                <Message  message = 'Hi'/>
                <Message  message = 'How is your IT?'/>
                <Message  message = 'Now'/>
            </div>
        </div>
    )
}

export default Dialogs