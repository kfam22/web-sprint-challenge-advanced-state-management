import React, { Component, useEffect } from "react";

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
  }, []);

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

//Task List:
//1. [X]Connect the fetchSmurfs actions to the App component.
//2. [X]Call the fetchSmurfs action when the component mounts.