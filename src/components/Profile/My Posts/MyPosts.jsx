import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {posts} from "../../../index.js";

const MyPosts = () => {

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