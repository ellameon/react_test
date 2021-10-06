import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./Redux/state";



export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} updateNewPostText = {updateNewPostText} addPost = {addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}