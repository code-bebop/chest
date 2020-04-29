import React, {
  Component
} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
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
    let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "read"){
      let i = 0;
      while(i < this.state.content.length){
        let data = this.state.content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
          break;
        }
        i++;
      }
    } else if (this.state.mode === "create"){
      _article = <CreateContent onSubmit={(_title, _desc)=>{
        
      }}></CreateContent>
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
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }}  
        ></TOC>
        <Control onChangeMode={(_mode)=>{
          this.setState({mode: _mode});
        }}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
