import axios from 'axios';

export default {

    getPrescs: function () {
        return axios.get("/api/prescriptions");
    },
    // Gets the prescription with the given id
    getPresc: function(id) {
      return axios.get("/api/prescriptions/" + id);
    },
    // Deletes the prescription with the given id
    deletePresc: function(id) {
      return axios.delete("/api/prescriptions/" + id);
    },
    // Saves a prescription to the database
    savePresc: function(prescData) {
      return axios.post("/api/prescriptions", prescData);
    }
}