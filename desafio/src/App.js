import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Search from './Pages/Search/Search';
import SearchResult from './Pages/SearchResult';
import {withRouter} from 'react-router';

class App extends Component {
  render() {
    return(
      <Switch>
        
        <Route path='/search' component={Search}/> 

        <Route path='/searchresult' component={SearchResult}/>

        <Route component ={PageNotFound}/>


      
      </Switch>

    )
  }
}

export default withRouter(App);
