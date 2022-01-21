import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = ({smurfs, isLoading})=> {
    // const isLoading = false;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }else {
        return(<div className="listContainer">
        {smurfs.map(smurf =>{
                return <Smurf smurf={smurf} key={smurf.id}/>
            })}
    </div>);
    }
}
const MapStateToProps = state =>{
    return {
            smurfs: state.smurfs,
            isLoading: state.isLoading,
    }
}

export default connect(MapStateToProps)(SmurfList);

//Task List:
//1. [X]Connect the smurfs and loading state values to the SmurfList component.
//2. [X]Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. [X]Replace the static isLoading variable with the state loading variable.