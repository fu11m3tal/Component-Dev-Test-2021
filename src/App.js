import React from 'react';
import './App.css';
import content from './content.json';
import logo from './abc_logo.svg';
import Page from './Page.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: content,
      main: 0,
     };
     this.setMain = this.setMain.bind(this);
  }
  
  setMain(e) {
    var oldMain = document.getElementById(this.state.main);
    var newMain = e.target.id;
    this.setState({main:newMain})
  }

  render() {
    var { content, main } = this.state;
    var { pages } = content;
    var page = pages[main]
    var {title, slug, blocks} = page;
    var block = blocks[0];
    var {type, headline, subhead, cta, background} = block;
    return (
        <div className="App">
          <div className='Layout'>
              <img className="Logo" src={`${logo}`}/>
              <button className="Contact">Contact Us</button>
              <div className='Menu'>
                {content.pages.map((item, index) => (
                  <a id={index} href={`#${item.title}`} onClick={this.setMain}>{item.title}</a>
                ))}
              </div>
          </div>
          <Page headline={headline} subhead={subhead} cta={cta}/>
        </div>
    );
  }
}

export default App;
