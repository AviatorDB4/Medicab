const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/medicab"
);

const prescriptionSeed = [
    {
      drug_medication: "Adderall",
      generic: false,
      strength: "50mg",
      amount: "5 tabs",
      //Route is the way in which the medication is taken. Uses abbreviations.
      route: "PO", //PO means "By Mouth" (for some reason)
      frequency: "daily",
      //"why" is to describe when the medication should be taken for 'as needed' medications
      //PRN stands for "circumstances may require"
      why: "PRN cannot focus",
      //"how_much" is for how many tabs the pharmacy will dispense in one prescrition.
      how_much: "Disp #30(thirty)",
      //"refills" determines how many times the patient can refill the same prescription before needing a new one.
      refills: 10,
      id: "1",
    //   patient_identifiers: [{
    //     fullname: [{
    //         id: '1',
    //         firstname: "Josh",
    //         middlename: "Thomas",
    //         lastname: "Landi"
    //       }],
    //       dob: "09/30/1992"
    //       }]
    },
    {
        drug_medication: "Prednisone",
        generic: true,
        strength: "10mg",
        amount: "3 tabs",
        //Route is the way in which the medication is taken. Uses abbreviations.
        route: "PR", //PR means "Per Rectum"
        frequency: "daily",
        //"why" is to describe when the medication should be taken for 'as needed' medications
        //PRN stands for "circumstances may require"
        why: "PRN NA",
        //"how_much" is for how many tabs the pharmacy will dispense in one prescrition.
        how_much: "Disp #60(sixty)",
        //"refills" determines how many times the patient can refill the same prescription before needing a new one.
        refills: 5,
        id: "2",
        // patient_identifiers: [{
        //   id: '2',
        //   fullname: [{
        //       firstname: "Blake",
        //       middlename: "FunnyBones",
        //       lastname: "Jones"
        //     }],
        //     dob: "04/04/1958"
        //     }]
      }
    ];

db.Prescription
  .remove({})
  .then(() => db.Prescription.collection.insertMany(prescriptionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });