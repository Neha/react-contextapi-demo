import React from 'react';
import axios from 'axios';
export const AppContext = React.createContext();


export class AppProvider extends React.Component {
       state = {
           searchedPokemons : [],
           theme : 'light'
       }

       componentDidMount = () =>{
        axios('http://localhost:3000/data/PokemonNames.js')
        .then((response) => {
            this.setState({
                PokemonNames : response.data,
                searchedPokemons : response.data
                
            })
         })
       }

       themeButton = (e) => {
        console.log('click')
           this.setState( ({theme} ) => ({
               theme : theme === 'light' ? 'dark' : 'light'
           }) )
        }

       nameSearch = (char) =>{
          var arr = [];

            for(let i = 0; i < this.state.PokemonNames.length; i++){
                if( (this.state.PokemonNames[i].toLowerCase()).indexOf(char) > -1) {
                    arr.push(this.state.PokemonNames[i]);
                }
            else{
               
            }
            
            this.setState({
                searchedPokemons : arr
            })
  
        }
        }

        render(){
            return(
                <AppContext.Provider value={{
                    ...this.state,
                    nameSearch : this.nameSearch,
                    themeButton : this.themeButton
                }}>
                {this.props.children}
                </AppContext.Provider>
            )
        }
}