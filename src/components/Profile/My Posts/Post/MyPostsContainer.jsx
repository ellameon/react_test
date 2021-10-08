import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/ProfileReducer.js";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";
import store from "../../../../Redux/redux-store";



const MyPostsContainer = (props) => {
    //let state = props.store.getState()


    return (
        <StoreContext.Consumer> {
            (store ) => {
                let state = props.store.getState()
                let addPost = () => {
                    props.store.dispatch(addPostActionCreator())
                };
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    props.store.dispatch(action)
                }

                return
                <MyPosts
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer