import React, {
  Component
} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
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
      let i = 0;
      while(i < this.state.content.length){
        let data = this.state.content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={()=>{
            this.setState({mode:"welcome"});
          }}>
        </Subject>
        <TOC
          data={this.state.content}
          onChangePage={(id)=>{
            alert(id);
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }}  
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
