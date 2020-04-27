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
    new_message_data: {
        id: 1,
        new_message_text: "",
    },
};

const chatsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UP_NEW_MESS_TEXT':{
            let state_copy = {...state};
            state_copy.new_message_data  = {...state.new_message_data};
            state_copy.new_message_data.new_message_text = action.mess_text;
            return state_copy;
        }       ; 
        case 'ADD_MESS':{
            let mess_text = state.new_message_data.new_message_text
            let new_mess = {
                id: 1,
                name: "Kirill Baturevich",
                text: mess_text,
                date: currentData,
                imgUrl: "https://baturevich.ru/images/cn/user_img.jpg",
            };
            if (mess_text != "") {             
                let state_copy = {...state};
                state_copy.new_message_data  = {...state.new_message_data};
                state_copy.messages_data = [...state.messages_data];
                state_copy.messages_data.push(new_mess);
                state_copy.new_message_data.new_message_text = '';  
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

export const addMessActionCreate = () => ({type: 'ADD_MESS'});
export const upNewMessTextActionCreate = (mess_text) => ({type: 'UP_NEW_MESS_TEXT', mess_text: mess_text});
export const delMessAC = (mess_id) => ({type: 'DELETE_MESSAGE', mess_id : mess_id})
export default chatsPageReducer;