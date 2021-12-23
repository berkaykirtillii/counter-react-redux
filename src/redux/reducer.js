const initialState = {
    count:0
}
export const counterReducer = (state = initialState, action) => {
       switch (action.type) {
           case "INCREMENT":
               return {
                   ...state,
                   count: state.count + action.payload
               }
               break;
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count - action.payload
                }
                break;
           default:
               break;
       }      
       return state;
}



export const colorReducer = (state=null ,action) => {
       switch (action.type) {
           case "RED":
               return {
                   ...state,
                   color: "red"
               }
               break;
            case "BLUE":
                return {
                    ...state,
                    color: "blue"
                }
                break;
           default:
               break;
       }
       return state;
}
