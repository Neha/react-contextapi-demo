import React, { Component } from 'react';
import './App.css';
import { AppContext } from './Context';
import { AppProvider} from './Context'
import DataList from './DataList'
import SearchBar from './SearchBar'
import Button from './Button'

class App extends Component {
 render() {
  const styles = {
    light : {
      backgroundColor : '#eee',
      color : '#757575'
  },

  dark : {
      backgroundColor : '#999',
      color : '#fff'
  }
}
    
    return (
    <AppProvider>
      <AppContext.Consumer>
        {
          (c) => {
            return(
              <section className="wrapper" style={styles[c.theme]}>
                <h1>Search The Pokemon Names</h1>
                <p>by using context API</p>
                <SearchBar/>
                <DataList />
                <Button/>
                </section>
            )
          }
        }
        </AppContext.Consumer>
      </AppProvider>
       
    );
  }
}

export default App;
