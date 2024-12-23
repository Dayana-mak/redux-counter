import { client } from "../../api/client";

export const API = {
  getCounter: function() {
    console.log('API.getCounter called');
    return client.get('/api/counter')
  }
}