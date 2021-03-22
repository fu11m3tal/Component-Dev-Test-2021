import React from 'react';
import './App.css';
import content from './content.json';
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
        <nav>
          {content.pages.map((item, index) => (
            <div>
              <button id={index} className={item.title} onClick={this.setMain}>
                {item.title}
              </button>
            </div>
          ))}
        </nav>
        <header className="App-header">
          {page.title}
          <br></br>
          {page.blocks[0].subhead}
        </header>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
