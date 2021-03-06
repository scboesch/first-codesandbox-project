import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Greeting = () => (
    <div>
      <h3>Have fun</h3>
    </div>
  )

const App = () => (
  <div style={styles}>
    <Hello name="Chris" />
    <h2>Saving Code to Github</h2>
    <Greeting />
  </div>
);

render(<App />, document.getElementById('root'));
