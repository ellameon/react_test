import React from "react"
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
            </div>
            <div>
                ava + desc
                <div>
                    my posts
                </div>
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile