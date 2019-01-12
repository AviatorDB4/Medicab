import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn.js";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Prescriptions extends Component {

  state = {
    prescriptions: "",
    drug_medication: "",
    generic: false,
    strength: "",
    amount: "",
    route: "",
    frequency: "",
    why: "",
    how_much: "",
    refills: 0,
  };
  debugger
  componentDidMount() {
    console.log(this.state);
    this.loadPrescriptions();
  }

  loadPrescriptions = () => {
    API.getPrescs()
      .then(res => this.setState({
        prescriptions: res.data,
        drug_medication: "",
        generic: false,
        strength: "",
        amount: "",
        route: "",
        frequency: "",
        why: "",
        how_much: "",
        refills: 0,
        notes: ""
      }))
      .catch(err => console.log("Error" + err))
  }

  deletePresc = id => {
    API.deletePresc(id)
      .then(res => this.loadPrescriptions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name + ": " + this.state)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    if (true) {
      API.savePresc({
        drug_medication: this.state.drug_medication,
        generic: this.state.generic,
        strength: this.state.strength,
        amount: this.state.amount,
        route: this.state.route,
        frequency: this.state.frequency,
        why: this.state.why,
        how_much: this.state.how_much,
        refills: this.state.refills,
        notes: this.state.notes
      })
        .then(res => this.loadPrescriptions())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Prescriptions</h1>
            </Jumbotron>
            <form>
              <div>
                <Input
                  value={this.state.drug_medication}
                  onChange={this.handleInputChange}
                  name="drug_medication"
                  placeholder="Medication Name (required)"
                />

                <Input
                  value={this.state.strength}
                  onChange={this.handleInputChange}
                  name="strength"
                  placeholder="Strength of Medication"
                />
                <Input
                  value={this.state.amount}
                  onChange={this.handleInputChange}
                  name="amount"
                  placeholder="Per Use Dose (required)"
                />
                <Input
                  value={this.state.route}
                  onChange={this.handleInputChange}
                  name="route"
                  placeholder="Method of Ingestion (required)"
                />
                <Input
                  value={this.state.frequency}
                  onChange={this.handleInputChange}
                  name="frequency"
                  placeholder="Frequency of Use (required)"
                />
                <Input
                  value={this.state.why}
                  onChange={this.handleInputChange}
                  name="why"
                  placeholder="When Should You Use (optional)"
                />
                <Input
                  value={this.state.how_much}
                  onChange={this.handleInputChange}
                  name="how_much"
                  placeholder="How Many Pills per Prescription (required)"
                />
                <Input
                  value={this.state.refills}
                  onChange={this.handleInputChange}
                  name="refills"
                  placeholder="How Many Refills on Your Prescription (required)"
                />
                <TextArea
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="Notes (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.drug_medication
                    && this.state.amount
                    && this.state.strength
                    && this.state.route
                    && this.state.frequency
                    && this.state.why
                    && this.state.how_much
                    && this.state.refills)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Prescription
              </FormBtn>
              </div>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Prescriptions</h1>
            </Jumbotron>
            {this.state.prescriptions.length ? (
              <List>
                {this.state.prescriptions.map(prescription => (
                  <ListItem key={prescription._id}>
                    <Link to={"/prescriptions/" + prescription._id}>
                      <strong>
                        {prescription.drug_medication}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePresc(prescription._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Prescriptions;