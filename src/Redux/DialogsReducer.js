const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer