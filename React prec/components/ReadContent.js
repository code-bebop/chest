import React, { Component } from 'react';

class ReadContent extends Component {
  render(){
    return(
      <main>
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </main>
    );
  }
}

export default ReadContent;