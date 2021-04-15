import React from 'react';
import ReactDOM from 'react-dom';
import { Welcome } from './Welcome';

class Home extends React.Component {
  render() {
    return 
    (
      <h1>Rathod</h1>
      <Welcome name="AMan" />;
    )
  }
}

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);