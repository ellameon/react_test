let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'bla', likesCount: 1},
                {id: 4, message: 'what?', likesCount: 5},
            ],
            newPostText: 'samurai'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your IT?'},
                {id: 3, message: 'Now'},
                {id: 4, message: 'Say'},
                {id: 5, message: 'Give'},
            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Leha',
                    avatar: <img src={'https://www.meme-arsenal.com/memes/1e88e7dde59becc3fd4ce7a21b2ad2c9.jpg'}/>
                },
                {id: 2, name: 'Roma', avatar: <img src={'https://avatarko.ru/img/kartinka/9/anime_8317.jpg'}/>},
                {
                    id: 3,
                    name: 'Anton',
                    avatar: <img src={'https://pm1.narvii.com/6441/55edd70377ad36c41c727f1de7335d41a0b1520f_00.jpg'}/>
                },
                {
                    id: 4,
                    name: 'Pasha',
                    avatar: <img src={'https://i.pinimg.com/550x/79/3f/28/793f28ebd6631cb5ac1927c0fd9a7c83.jpg'}/>
                },
                {
                    id: 5,
                    name: 'Denis',
                    avatar: <img src={'https://99px.ru/sstorage/56/2014/10/image_562110140014022816361.png'}/>
                },
                {
                    id: 6,
                    name: 'Sasha',
                    avatar: <img src={'https://animeslayers.ru/wp-content/uploads/kartinki/vk/naavatarkuvk2.jpg'}/>
                },
            ],
        }

    },
    getState () {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State is changed')
    },
    subscribe (observer)  {
        this._rerenderEntireTree = observer
    },


    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree(this._state)
        }

    }

}

export default store
window.store = store