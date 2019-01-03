import axios, { AxiosInstance } from 'axios';

export default class API {
  public client: AxiosInstance;

  constructor() {
    this.client = axios.create();
  }

  getCities() {
    return this.client.get('http://localhost:3001/db');
  }
}
