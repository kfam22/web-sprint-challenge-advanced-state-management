import React, { useEffect } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from 'react-redux';
import { fetchSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({fetchSmurfs})=> {

  useEffect(()=> {
    fetchSmurfs();
  },[]);

  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

export default connect(null, {fetchSmurfs})(App);
