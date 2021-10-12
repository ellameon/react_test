import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/Post/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer   />
        </div>
    )
}

export default Profile