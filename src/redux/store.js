import addPostReducer from "./addPostReducer";
import addMessReducer from "./addMessReducer";

let store = {

    _state: {

        profile_page: {
            user_data: [{
                id: 1,
                imgAdress: "https://baturevich.ru/images/cn/user_img.jpg",
                name: "Kirill Baturevich",
                posts_count: 1,
                friends_count: 2,
                followers_count: 999,
                music_count: 15,
                videos_count: 9,
            }],
            new_post_data: [{
                id: 1,
                imgAdress: "https://baturevich.ru/images/cn/user_img.jpg",
                new_post_text: "",
            }],
            posts_data: [{
                id: 1,
                name: "Kirill Baturevich",
                date: '11 Apr at 3:40 ',
                text: "Hello my name is Kirill",
                imgAdress: "https://baturevich.ru/images/cn/user_img.jpg",
                likeCounts: 137,
                commentCounts: 56
            }, ]
        },
        chats_page: {
            messages_data: [

            ],
            mes_header_data: [{
                name: "Sasha kosulin",
                imgAdress: "https://sun9-14.userapi.com/c628023/v628023989/11603/fDtA51AcU8w.jpg",
                date: "Last seen today at 3:40 AM"
            }],
            dialogs_data: [{
                    id: 1,
                    name: "Sasha Kosulin",
                    imgAdress: "https://sun9-14.userapi.com/c628023/v628023989/11603/fDtA51AcU8w.jpg",
                    path: "/sasha-kosulin"
                },
                {
                    id: 2,
                    name: "Evgeny Baturevich",
                    imgAdress: "https://sun9-63.userapi.com/c849028/v849028934/3c13b/cfPvKS7D5Fo.jpg",
                    path: "/evgeny-baturevich"
                },
            ],
            new_message_data: [{
                id: 1,
                new_message_text: "",
            }]
        },
        header:{
            header_data: [{
                id:1,
                name: this._state.profile_page.user_data[0].name,
                imgAdress: this._state.profile_page.user_data[0].imgAdress,
            },],
        }
    },

    _callSubscriber() {
        console.log(true)
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profile_page =  addPostReducer(this._state.profile_page, action);
        this._state.chats_page = addMessReducer(this._state.chats_page, action);
        this._callSubscriber(this._state);
    },
};


export default store;