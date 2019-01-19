import axios from 'axios';

export default {

  getPrescs: function () {
    return axios.get("/api/prescriptions");
  },
  // Gets the prescription with the given id
  getPresc: function (id) {
    return axios.get("/api/prescriptions/" + id);
  },
  // Deletes the prescription with the given id
  deletePresc: function (id) {
    return axios.delete("/api/prescriptions/" + id);
  },
  // Saves a prescription to the database
  savePresc: function (prescData) {
    return axios.post("/api/prescriptions", prescData);
  },
  getDrugInfo: function (drug) {
    return axios.get("https://api.fda.gov/drug/label.json?search=description:" + drug + "&limit=5");
  },
  changePresc: function(id, prescData) {
    return axios.put("/api/prescriptions/" + id, prescData);
  },
  getDrugLink: function (link) {
    return axios.get("https://api.fda.gov/drug/label.json?search=description:" + link + "&limit=5");
  },
};





