import React, {
  Component
} from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
		this.max_content_id = 3;
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
	
	getReadContent(){
		let i = 0;
		while(i < this.state.content.length){
			let data = this.state.content[i];
			if(data.id === this.state.selected_content_id){
				return data;
				break;
			}
			i++;
		}
	}
	
	getContent(){
		let _title, _desc, _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "read"){
			let _content = this.getReadContent();
			_article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === "create"){
      _article = <CreateContent onSubmit={(_title, _desc)=>{
        this.max_content_id++;
				let _content = Array.from(this.state.content);
				_content.push({id:this.max_content_id, title:_title, desc:_desc});
				this.setState({
					content:_content,
					mode: "read",
				})
      }}></CreateContent>
    } else if (this.state.mode === "update"){
			let _contents = this.getReadContent();
      _article = <UpdateContent data={_contents} onSubmit={(_id, _title, _desc)=>{
				let _content = Array.from(this.state.content);
				let i = 0;
				while(i < _content.length){
					if(_content[i].id === _id){
						_content[i] = {id:_id, title:_title, desc:_desc};
						break;
					}
					i++;
				}
				this.setState({
					content:_content,
					mode: "read"
				});
      }}></UpdateContent>
    }
		return _article;
	}
	
	
  render() {
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
					if(_mode === "delete"){
						if(window.confirm("reallly???")){
							let _content = Array.from(this.state.content);
							let i = 0;
							while(i < this.state.content.length){
								if(_content[i].id === this.state.selected_content_id){
									_content.splice(i, 1);
									break;
								}
								i++;	
							}
							this.setState({mode:"welcome", content:_content});
						}
					}
        }}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
