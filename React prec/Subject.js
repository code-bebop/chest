import React, { Component } from 'react';

      //        <Subject
      //          title={this.state.subject.title}
      //          sub={this.state.subject.sub}>
      //        </Subject>

class Subject extends Component {
  render(){
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
        <p>{this.props.sub}</p>
      </header>
    );
  }
}

export default Subject;