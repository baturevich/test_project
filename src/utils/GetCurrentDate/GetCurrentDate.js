export const GetCurrentDate = (data_type)=>{
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
    default: ;
    };
    if(data_type == "full_date"){
        return  day + " " + fmonth + " at " + hour + ":" + minutes;
    } else{
        return  hour + ":" + minutes;
    }
}
