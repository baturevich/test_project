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
        imgUrl: "https://baturevich.ru/images/cn/user4.jpg",
        date: "Last seen today at 3:40 AM"
    }],
    dialogs_data: [{
            id: 1,
            name: "Sasha Kosulin",
            imgUrl: "https://baturevich.ru/images/cn/user4.jpg",
            path: "/sasha-kosulin"
        },
        {
            id: 2,
            name: "Evgeny Baturevich",
            imgUrl: "https://sun9-63.userapi.com/c849028/v849028934/3c13b/cfPvKS7D5Fo.jpg",
            path: "/evgeny-baturevich"
        },
    ],
};

const chatsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESS':{
            let mess_text = action.mess_text;
            let mess_id = state.messages_data.length;
            let new_mess = {
                id: mess_id,
                name: "Kirill Baturevich",
                text: mess_text,
                date: currentData,
                imgUrl: "https://baturevich.ru/images/cn/user_img.jpg",
            };
            if (mess_text != "") {             
                let state_copy = {...state};
                state_copy.messages_data = [...state.messages_data];
                state_copy.messages_data.push(new_mess);
                return state_copy  
            };          
        }
        case 'DELETE_MESSAGE':{
            return {
                ...state,
                messages_data: state.messages_data.filter( m => {
                    if(m.id != action.mess_id){
                        return m
                    }
                })
            }
        }    
        default:
            return state;
    };
};

export const addMessAC = (mess_text) => ({type: 'ADD_MESS', mess_text});
export const delMessAC = (mess_id) => ({type: 'DELETE_MESSAGE', mess_id : mess_id})
export default chatsPageReducer;