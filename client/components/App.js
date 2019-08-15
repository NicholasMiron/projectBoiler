import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [
        ['How do you comfort a JavaScript bug?', 'You console it.'],
        ['When a JavaScript date has gone bad, "Don’t call me, I’ll callback you. I promise!"', ''],
        ['Why was the JavaScript developer sad?','Because he didn’t Node how to Express himself.'],
        ['Why do C# and Java developers keep breaking their keyboards?','Because they use a strongly typed language.'],
        ['Dev1 saw a strange JavaScript function & asked, “What is this?”.','Dev2 responded, “I don’t know. I would’ve called you, but I was in a bind”'],
        ['Why did the child component have such great self-esteem?','Because its parent kept giving it props!'],
        ['Why did the functional component feel lost?','Because it didn’t know what state it was in!'],
        ['Why did the react class component feel relieved?','Because it was now off the hook.'],
        ['Why couldn’t the React component understand the joke?','Because it didn’t get the context.'],
        ['JavaScript makes me want to flip the table and say "Fuck this shit!"','But I can never be sure what "this" refers to.'],
      ],
      currentJoke: 0,
      answer: false
    };
  }

  componentDidMount() {
    this.setState({currentJoke: ~~(Math.random() * this.state.jokes.length)}, console.log(this.state.currentJoke));
  }

  render() {
    return (
      <>
        <div 
          className={'greeting'}
        >
          {this.state.jokes[this.state.currentJoke][0]}
        </div>
        <div className={'greeting'}>{this.state.jokes[this.state.currentJoke][1]}</div>
      </>
    )
  }
}

export default App;
