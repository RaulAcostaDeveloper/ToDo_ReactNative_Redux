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
const START_SUBMIT = 'START_SUBMIT';
const ERROR_SUBMIT = 'ERROR_SUBMIT';

export const complete = id => ({
    type: COMPLETE,
    payload: id,
})
//Action de submit
export const submit = todo => ({
    type: SUBMIT,
    payload: todo,
})
export const startSubmit = () => ({
    type: START_SUBMIT,
})
export const errorSubmit = error => ({
    type : ERROR_SUBMIT,
    error,
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

//Es un thunk, un middleware de redux

export const saveTodo = text => async(dispatch, getState) => {
    dispatch(startSubmit())
    try {
        const todo = {
            description: text,
            completed: false,
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        const id = await response.json();
        dispatch(submit({...todo, ...id}))
    } catch (error) {
        dispatch(errorSubmit(error))
    }
}