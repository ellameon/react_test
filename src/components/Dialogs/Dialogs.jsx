import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogs} from "./../../index.js"
import {messages} from "./../../index.js"
const Dialogs = (props) => {



    let dialogsElements = dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>)
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