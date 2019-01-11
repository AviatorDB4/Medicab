const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  drug_medication: { type: String, required: true },
  generic: { type: Boolean, required: false },
  strength: { type: String, required: true },
  amount: {type: String, required: true },
  route: {type: String, required: true },
  frequency: {type: String, required: true },
  why: {type: String, required: false },
  how_much: {type: String, required: true },
  refills: {type: Number, required: true },
  notes: {type: String, requuired: false},
  date_added: { type: Date, default: Date.now }
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;

// drug_medication: "Adderall",
//       generic: false,
//       strength: "50mg",
//       amount: "5 tabs",
//       //Route is the way in which the medication is taken. Uses abbreviations.
//       route: "PO", //PO means "By Mouth" (for some reason)
//       frequency: "daily",
//       //"why" is to describe when the medication should be taken for 'as needed' medications
//       //PRN stands for "circumstances may require"
//       why: "PRN cannot focus",
//       //"how_much" is for how many tabs the pharmacy will dispense in one prescrition.
//       how_much: "Disp #30(thirty)",
//       //"refills" determines how many times the patient can refill the same prescription before needing a new one.
//       refills: "10",
//       img_src:"../images/Adderall.jpg",
//       id: "1",
//       patient_identifiers: [{
//         fullname: [{
//             id: '1',
//             firstname: "Josh",
//             middlename: "Thomas",
//             lastname: "Landi"
//           }],
//           dob: "09/30/1992"
//           }]