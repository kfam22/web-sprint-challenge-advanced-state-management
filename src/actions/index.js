import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) =>{
    dispatch(fetchStart());
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        dispatch(fetchSuccess(res.data));
        // check that res.data is what we are expecting back
    })
    .catch(err=>{
        dispatch(fetchFail(err));
    })
}

export const addSmurf = (smurf)=> (dispatch) =>{
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res=>{
        dispatch({type:ADD_SMURF, payload: smurf});
    })
    .catch(err=>{
        dispatch(fetchFail(err.response.data.err))
    })
}

export const setError = (errorMessage)=>{
    return({type:SET_ERROR, payload: errorMessage});
}

const fetchStart = ()=>{
    return({type:FETCH_START});
}

const fetchSuccess = (smurfs)=>{
    return({type:FETCH_SUCCESS, payload: smurfs});
}

const fetchFail = (error)=>{
    return({type:FETCH_FAIL, payload: error});
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.