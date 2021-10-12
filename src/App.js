import React from "react";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           store={props.store}
                       />}/>
                <Route path='/users' component={() => <UsersContainer />}/>
                <Route path='/news' component={() => <News/>}/>
                <Route path='/music' component={() => <Music/>}/>
                <Route path='/settings' component={() => <Settings/>}/>

            </div>
        </div>
    )
}

export default App;
