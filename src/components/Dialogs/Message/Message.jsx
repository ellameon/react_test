import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div><div>
            <div className={s.message}>{props.message}</div>
        </div>
    <div>

        <div>
            <textarea/>
        </div>
</div><button>Add message</button><textarea>1</textarea>
</div>
    )
}

export default Message