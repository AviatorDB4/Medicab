import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Prescriptions from './pages/Prescriptions';
import './App.css';
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
          <Route exact path="/" component={Prescriptions} />
          <Route exact path="/prescriptions" component={Prescriptions} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;