import React, { Component } from 'react';
import { AppContext } from './Context';

class Button extends Component {
        render(){
            const button = {
                    padding : '10px',
                    fontSize : '16px',
                    fontWeight : '800',
                    marginTop : '10px'
                }
            
                
            
            return(
                <AppContext.Consumer>
                    {
                        (c) => {
                           return ( <button onClick={c.themeButton} style={button}>{c.theme}</button> )
                        }
                    }
                </AppContext.Consumer>
            )
        }
}

export default Button;