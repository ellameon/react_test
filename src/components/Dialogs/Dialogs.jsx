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
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData =
        [{id: 1, name: 'Leha'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Anton'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Denis'},
        {id: 6, name: 'Sasha'},]

    let messagesData =
            [{id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT?'},
            {id: 3, message: 'Now'},
            {id: 4, message: 'Say'},
            {id: 5, message: 'Give'},
        ]



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name='Roma' id='2'/>
                <DialogItem name='Anton' id='3'/>
                <DialogItem name='Pasha' id='4'/>
                <DialogItem name='Denis' id='5'/>
                <DialogItem name='Sasha' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0]. message}/>
                <Message message={messagesData[1]. message}/>

            </div>
        </div>
    )
}

export default Dialogs