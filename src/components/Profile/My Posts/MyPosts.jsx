import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {


    let posts =
            [{id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
        ]
    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts