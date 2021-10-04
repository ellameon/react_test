import React from "react"
import s from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
            </div>
            <div>
                ava + desc


             <MyPosts />
            </div>
        </div>
    )
}

export default Profile