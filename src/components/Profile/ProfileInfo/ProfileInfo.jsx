import React from "react"
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo