const count = 0;

export function reducer(state = count,action){
const {type,payload} =action;
switch (type){
    case "INCREMENT" : 
            return state+1;
    case "DECREMENT" :
            if(state >0) 
            return state-1;
    default: 
            return state;
}
}