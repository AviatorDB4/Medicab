import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PrescriptionContainer from './PrescriptionContainer';
import { dummyprescriptions } from '../dummydata/dummyprescriptions';

const PrescriptionFormButton = ({match}) => (

    <div className="presc-button">
      <div className="presc-header">
        <h2>View Prescriptions</h2>
            <button><NavLink to="/prescriptions">Prescriptions</NavLink></button>
      </div>

    {/* Routes */}
    <Route path="/prescriptions" render={ () => <PrescriptionContainer data={dummyprescriptions} /> } />
    </div>
);

export default PrescriptionFormButton;