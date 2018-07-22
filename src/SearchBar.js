import React , {Component} from 'react';
import { AppContext } from './Context';

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {}
    }
   render(){
    const searchBox = {
        'width' : '600px',
        'border' : '1px solid #999',
        'height' : '30px',
        'marginBottom' : '20px',
        'fontSize' : '18px'
    }
    return(
           <AppContext.Consumer>
               {
                   (c) => {
                    
                       const searchChar = (event) => {
                            this.setState({ 
                                char: event.target.value 
                              }, () => {
                                c.nameSearch(this.state.char)
                            })
                         }

                        return(
                            <input type="text" 
                                style={searchBox} 
                                value={this.state.char}
                                name="search"
                                onChange={searchChar}/>
                        )
                    }
               }
        
           </AppContext.Consumer>
       )
   }
}

export default SearchBar