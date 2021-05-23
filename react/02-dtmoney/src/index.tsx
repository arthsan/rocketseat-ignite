import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transacation: Model,

  },

  seeds(server) {
    server.db.loadData({
      transacations: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-13'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transacations', ()=>{
      return this.schema.all('transacation')
    });

    this.post('/transacations', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create('transacation',data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
