import { createServer, Response } from "miragejs"

let INITIAL_COUNTER = 10;

createServer({
  routes() {
    this.namespace = "api"

    this.get('/counter', () => {
      return {
        counter: INITIAL_COUNTER
      }
    });

    this.post('/counter/save', (schema, request) => {
      const counter = JSON.parse(request.requestBody).counter;
      console.log("Получено от клиента:", counter);

      return {
        status: 'ok'
      }
    })

  }
})