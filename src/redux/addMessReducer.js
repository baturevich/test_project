let now = new Date(),
    hour = now.getHours(),
    minutes = now.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
let currentData = hour + ":" + minutes;

let initialState = {
    messages_data: [],
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
    }],
};

const addMessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMess':
            let mess_text = state.new_message_data[0].new_message_text;
            let new_mess = {
                id: 1,
                name: "Kirill Baturevich",
                text: mess_text,
                date: currentData,
                imgAdress: "https://baturevich.ru/images/cn/user_img.jpg",
            }
            if (mess_text != "") {
                state.messages_data.push(new_mess);
                state.new_message_data[0].new_message_text = "";
            } else {
                return;
            }
            return state;
        case 'upNewMessText':
            state.new_message_data[0].new_message_text = action.mess_text;
           return state;
        default:
            return state;
    };
};

export const addMessActionCreate = () => ({
    type: 'addMess'
});
export const upNewMessTextActionCreate = (mess_text) => ({
    type: 'upNewMessText',
    mess_text: mess_text
});
export default addMessReducer;