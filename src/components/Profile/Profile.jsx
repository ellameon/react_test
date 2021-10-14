import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile