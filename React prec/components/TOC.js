import React, { Component } from 'react';

class TOC extends Component {
  render(){
    let lists = [];
    const data = this.props.data;
    let i = 0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/TOC/"+data[i].id}
            data-id={data[i].id}
            onClick={(e)=>{
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
              {data[i].title}</a>
        </li>);
      i++;
    }
    return (
      <ul>
        {lists}
      </ul>
    );
  }
}

export default TOC;