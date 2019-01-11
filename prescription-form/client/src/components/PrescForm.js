import React, {Component} from 'react';

class PrescForm extends Component {

    state = {
        drug_medication: "",
      };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // clearing the inputs
        this.setState({
          drug_medication: "",
        });
      };


    render () {
        return (
            <div>
              <p>
                Hello {this.state.drug_medication}
              </p>
              <form className="form">
                <input
                  value={this.state.drug_medication}
                  name="drug_medication"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Name of Medication"
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
            </div>
          );
    }
}

export default PrescForm;