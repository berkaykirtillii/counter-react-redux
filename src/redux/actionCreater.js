export const increment = (num) => {
    return {type:"INCREMENT",payload:num}
}

export const decrement = (num) => {
    return {type:"DECREMENT",payload:num}
}

export const colorRed = () => {
    return {type:"RED"}
}

export const colorBlue = () => {
    return {type:"BLUE"}
}