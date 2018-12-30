const axios = require('axios');

class API {
  constructor() {
    this.client = axios.create();
  }

  getCities() {
    return this.client.get('http://localhost:3001/db');
  }
}

module.exports = API;
