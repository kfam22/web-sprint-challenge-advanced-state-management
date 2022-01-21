import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = ({smurfs, isLoading})=> {

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