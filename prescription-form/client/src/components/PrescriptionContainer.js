import React from 'react';
import Prescription from './Prescription';

const PrescriptionContainer = (props) => {
  let prescriptions = props.data.map((prescription) => {
      console.log(prescription);
    return <Prescription 
                   drug_medication={prescription.drug_medication}
                   strength={prescription.strength}
                   amount={prescription.amount}
                   route={prescription.route}
                   frequency={prescription.frequency}
                   why={prescription.why}
                   how_much={prescription.how_much}
                   refills={prescription.refills}
                   img={prescription.img_src}
                   key={prescription.id} />
  }); 
  return (
    <div>
      <ul>
        {prescriptions}    
      </ul>
    </div>
  );
}

export default PrescriptionContainer;