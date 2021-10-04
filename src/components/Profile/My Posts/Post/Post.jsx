import React from "react"
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amateur-made_Na%27vi.jpg/1200px-Amateur-made_Na%27vi.jpg'/>
            {props.message}
            <div>
                <span>likes = {props.likes}</span>
            </div>
        </div>
    )
}

export default Post