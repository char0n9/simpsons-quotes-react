import React from 'react';

class DisplayQuotes extends React.Component{
    render() {
        return (<div>
            <h1>{this.props.quote}</h1>
            <h2>{this.props.character}</h2>
            <img src={this.props.image}/>

            {/* quote: the quote's text
                character: who said the quote
                image: the character's image */}
        </div>)
    }
}

export default DisplayQuotes;