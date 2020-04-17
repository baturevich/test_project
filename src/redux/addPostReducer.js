let now = new Date(),
    day = now.getDate(),
    month = now.getMonth(),
    hour = now.getHours(),
    minutes = now.getMinutes(),
    fmonth;
if (minutes < 10) {
    minutes = "0" + minutes;
};
switch (month) {
    case 0: fmonth = "Jan"; break;
    case 1: fmonth = "Feb"; break;
    case 2: fmonth = "March"; break;
    case 3: fmonth = "Apr"; break;
    case 4: fmonth = "May"; break;
    case 5: fmonth = "June"; break;
    case 6: fmonth = "July"; break;
    case 7: fmonth = "Aug"; break;
    case 8: fmonth = "Sep"; break;
    case 9: fmonth = "Oct"; break;
    case 10: fmonth = "Nov"; break;
    case 11: fmonth = "Dec"; break;
};
let currentData = day + " " + fmonth + " at " + hour + ":" + minutes;

let initialState =   {
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
    },]
};
const addPostReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addPost':
            let post_text = state.new_post_data[0].new_post_text;
            let newPost = {
                id: 3,
                name: "Kirill Baturevich",
                date: currentData,
                text: post_text,
                imgAdress: "https://baturevich.ru/images/cn/user_img.jpg",
                likeCounts: 0,
                commentCounts: 0
            };
            if (post_text != "") {
                state.posts_data.unshift(newPost);
                state.new_post_data[0].new_post_text = "";
            };
            return state;
        case 'upNewPostText':
            state.new_post_data[0].new_post_text = action.post_text;
            return state;
        default:
            return state;
    };

};

export const addPostActionCreate = () => ({type: 'addPost'});
export const upNewPostTextActionCreate = (post_text) => ({type: 'upNewPostText',post_text: post_text});
export default addPostReducer;