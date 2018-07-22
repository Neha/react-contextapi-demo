import React, { Component } from 'react';
import './App.css';
import {AppProvider} from './Context'
import DataList from './DataList'
import SearchBar from './SearchBar'

class App extends Component {
 render() {
    return (
      <section className="wrapper">
      <h1>Search The Pokemon Names</h1>
      <p>by using context API</p>
      <AppProvider>
        <SearchBar/>
        <DataList />
       </AppProvider>
       </section>
    );
  }
}

export default App;
