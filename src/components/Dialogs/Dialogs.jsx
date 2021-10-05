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

    let dialogs =
        [{id: 1, name: 'Leha'},
            {id: 2, name: 'Roma'},
            {id: 3, name: 'Anton'},
            {id: 4, name: 'Pasha'},
            {id: 5, name: 'Denis'},
            {id: 6, name: 'Sasha'},]

    let messages =
        [{id: 1, message: 'Hi'},
            {id: 2, message: 'How is your IT?'},
            {id: 3, message: 'Now'},
            {id: 4, message: 'Say'},
            {id: 5, message: 'Give'},
        ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs