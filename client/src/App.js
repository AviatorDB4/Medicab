import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Prescriptions from './pages/Prescriptions';
import './App.css';
import About from './pages/About'
import Search from './pages/Search'
import Discover from './pages/Discover'
import ScriptPage from './pages/prescription-page'
import NavBar from './components/Navbar';
//import axios from 'axios';

//OpenFDA API Key: Ed1TwZFrGiXnLXJafQsJqH8OomhgyrKSnAS8n0lN

class App extends Component {
  //My attempt at using the API. Does not work yet.
  // constructor() {
  //   super();
  //   this.state = {
  //     results: []
  //   };
  // }

  // componentDidMount() {
  //   axios.get('https://api.fda.gov/drug/label.json?search=openfda.brand_name:adderall&limit=1')
  // .then(response => {
  //   this.setState({
  //     results: response.results
  //   });
  // })
  // .catch(error => {
  //   console.log('Error fetching and parsing data', error);
  // });
  // };


  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <NavBar />
          <Route exact path="/" component={About} />
          <Route exact path="/prescriptions" component={Prescriptions} />
          <Route exact path="/prescription-form" component={Prescriptions} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/prescription-page" component={ScriptPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
