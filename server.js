'use strict';

const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
var cors = require('cors')


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());

app.get('/api/eth/day', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=24&')
    .then((result) => {
      let data = result.data.Data;
      let labels = _.map(data, (x) => moment.unix(x.time).format('h:mm'));
      let values = _.map(data, (x) => x.close);
      res.send({
        labels,
        values,
      });
    });
});

app.get('/api/eth/week', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=168&')
    .then((result) => {
      let data = result.data.Data;
      let labels = _.map(data, (x) => moment.unix(x.time).format('MMM-DD h:mm'));
      let values = _.map(data, (x) => x.close);
      res.send({
        labels,
        values,
      });
    });
});

app.get('/api/eth/month', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=31')
    .then((result) => {
      let data = result.data.Data;
      let labels = _.map(data, (x) => moment.unix(x.time).format('MM/DD'));
      let values = _.map(data, (x) => x.close);
      res.send({
        labels,
        values,
      });
    });
});

app.get('/api/eth/year', (req, res) => {
  axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=365')
    .then((result) => {
      let data = result.data.Data;
      let labels = _.map(data, (x) => moment.unix(x.time).format('MM/DD/YY'));
      let values = _.map(data, (x) => x.close);
      res.send({
        labels,
        values,
      });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);