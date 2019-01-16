import React, { Component }from 'react';
import API from '../utils/API';

// const Prescription = (props) => (
    
//     <li className="prescription">
//         <div>
//             <h2>Medication: {props.drug_medication}</h2>
//             <p>Strength: {props.strength}</p>
//             <p>Amount: {props.amount}</p>
//             <p>Method of Ingestion: {props.route}</p>
//             <p>Frequency: {props.frequency}</p>
//             <p>Take When: {props.why}</p>
//             <p>Amount per Prescription: {props.how_much}</p>
//             <p>Amount of Refills: {props.refills}</p>
//         </div>
//     </li>
// )

class Prescription extends Component {

    state = {
        prescriptions: []
    };

    componentDidMount() {
        this.loadPrescriptions();
    }

    loadPrescriptions = () => {
        API.getPrescs()
        .then(res => this.setState({ prescriptions: res.data}))
        .catch(err => console.log(err))
    }

    
}

export default Prescription;