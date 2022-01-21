import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_SMURF,
    SET_ERROR
} from './../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_START:
            return{
                ...state,
                smurfs: [],
                isLoading: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            return{
                ...state,
                smurfs: [...state.smurfs, action.payload],
            }
        case SET_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  [X] an array of smurfs
//  [X] a boolean indicating if the app is loading
//  [X] a string indicating a possible error message

//2.[X] Add in the arguments needed to complete a standard reducer function.
//3.[X] Add in a reducer case to accommodate the start of a smurf fetch.
//4.[X] Add in a reducer case to accommodate the successful smurf api fetch.
//5.[X] Add in a reducer cases to accommodate the failed smurf api fetch.
//6.[X] Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7.[X]Add in a reducer case that adds in a value to the error message.