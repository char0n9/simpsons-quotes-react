import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuotes from './components/DisplayQuotes'



const dummyQuote = {
  
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
    }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = dummyQuote;
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image:data[0].image
        });
    });
  }

  render() {
    return (
      <div className="App">
       
        <DisplayQuotes quote={this.state.quote} character={this.state.character} image={this.state.image}/>
        <button type="button" onClick={this.getQuote}>Get new quote</button>
      
      </div>
    );
  }
}
export default App;
