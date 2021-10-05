import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className ={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Leha
                </div>
                <div className= {s.dialog}>
                    Roma
                </div>
                <div className= {s.dialog}>
                    Anton
                </div>
                <div className= {s.dialog}>
                    Sasha
                </div>
                <div className= {s.dialog}>
                    Pasha
                </div>
                <div className= {s.dialog}>
                    Denis
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