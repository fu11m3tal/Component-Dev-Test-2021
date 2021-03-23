import React from 'react';
import './App.css';
import content from './content.json';
import logo from './abc_logo.svg';
import backgrounds from './backgrounds/slide_one.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: content,
      main: 0
     };
     this.setMain = this.setMain.bind(this);
  }
  
  setMain(e) {
    console.log(backgrounds)
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
    console.log(background)
    return (
        <div className="App">
          <div className='layout'>
            <div className="logo-contact">
              <img className="logo" src={`${logo}`}/>
              <button className='contact'><p>Contact Us!</p></button>
            </div>
            <div className='menu'>
              {content.pages.map((item, index) => (
                <div id={index} onClick={this.setMain}>{item.title}</div>
              ))}
            </div>
            <div className='page'>
              <div className='page-header'>
                <div className="page-headline">
                  {headline}
                </div>
                <div className="page-subhead">
                  {subhead}
                </div>
              </div>
              <div className="Bg">
                <div className="cta">
                  {cta}
                </div>
                <div className='LETS-TALK'>Let's Talk!</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
