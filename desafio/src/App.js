import React, {Component} from 'react';
import Form from './components/Form/Form';
import Users from './components/Users/Users';

class App extends Component {
   
  render(){
    return(
      <div className="App">

        <div>
          <h1> Github Search </h1>
        </div>
        <Form />
        <Users />
      </div>
    );
  }
}

export default App;
