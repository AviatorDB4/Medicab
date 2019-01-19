import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import "./Search.css"
class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
 /*  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }
 */
  handleInputChange = event => { 
    this.setState({ search: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.getDrugInfo(this.state.search)
      .then(res => {
        console.log(res.data.results[0])
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.results[0].description,  box_warnings: res.data.results[0].boxed_warning ,error: "" });
      
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For Medication!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          {this.state.results.length > 0 ?  
          <SearchResults results={this.state.results}  results2={this.state.box_warnings}/>
          : false
          }
         </Container> 
      </div>
    );
  }
}
export default Search;