export const requiared = (value)=>{
    if(!value)  return "This field is required"
    return undefined
}
export const maxLength = (maxLength)=> (value) =>{
    if(value.length > maxLength) return `Max length ${maxLength} sumbols` 
    return undefined
}