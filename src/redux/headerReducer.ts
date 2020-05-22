
type HeaderDataType = {id: number, name: string,  imgUrl: string,}

let initialState = {
    header_data :{
      id:1,
      name: "kirill",
      imgUrl: "https://baturevich.ru/images/cn/user_img.jpg",
    } as HeaderDataType, 
};
type InitialStateType = typeof initialState;
const headerReducer = (state = initialState, action:any):InitialStateType=>{
    return state;
}

export default headerReducer;