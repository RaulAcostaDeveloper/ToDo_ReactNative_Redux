//función de reducer de todos
const initialState = [
    { 
        id:1,
        description: 'Todo 1 Redux',
        completed: false,
    },
    { 
        id:2,
        description: 'Todo 2 Redux',
        completed: false,
    },
]
const COMPLETE = 'COMPLETE';
const SUBMIT = 'SUBMIT';

export const complete = id => ({
    type: COMPLETE,
    payload: id,
})
export const submit = text => ({
    type: SUBMIT,
    payload: {
        id: Math.random().toString(36),
        description: text,
        completed: false,
    },
})
export default (state = initialState, action)=> {
    switch(action.type){
        case COMPLETE:
            return state.map( 
                elemento => elemento.id === action.payload ? 
                ({...elemento, completed:!elemento.completed}) 
                : 
                elemento 
                )
        case SUBMIT: {
            return [action.payload].concat(state);
        }
        default:
            return state;
    }
}