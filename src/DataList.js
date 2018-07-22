import React, { Component } from 'react';
import { AppContext } from './Context';

class DataList extends Component {
        render(){
            return(
                <AppContext.Consumer>
                    {
                        (c) => {
                            if(c.searchedPokemons.length){
                              return c.searchedPokemons.map((elm,index) => {
                                   return <li key={index}>{elm}</li>
                                })  
                            }
                            else{
                                return <p>There is no matching result</p>
                            }
                        }
                    }
                </AppContext.Consumer>
            )
        }
}

export default DataList;