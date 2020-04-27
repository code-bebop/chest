import React, {
  Component
} from 'react';
//import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: {title: "Herb Green", sub: "Cherry Black"},
      welcome:{title: "welcome", desc:"Hello React"},
      content: [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    let _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }
    return (
      <div className="App">
        <header>
          <h1><a href="/" onClick={(e)=>{
            e.preventDefault();
            this.state.mode = "welcome";
            this.setState({
              mode:"welcome"
            });
          }}>{this.state.subject.title}</a></h1>
          <p>{this.state.subject.sub}</p>
        </header>
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
