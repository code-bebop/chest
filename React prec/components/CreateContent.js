import React, { Component } from 'react';

class CreateContent extends Component {
  render(){
    return(
      <main>
        <h2>Create</h2>
        <form action="/create_process" method="post"
          onSubmit={(e)=>{
            e.preventDefault();
            this.props.onSubmit(
							e.target.title.value,
							e.target.desc.value
						);
          }}
        >
          <p><input name="title" type="text" placeholder="title"></input></p>
          <p><textarea name="desc" placeholder="description"></textarea></p>
          <p><input type="submit"></input></p>
        </form>
      </main>
    ); 
  }
}

export default CreateContent;