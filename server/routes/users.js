const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const cors = require('cors');

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=10&page=1&sparkline=false%27'
};


module.exports = (db) => {
  // all routes will go here
  router.use(cors());
  router.get('/', (req, res) => {
    axios.request(options).then((response) => {
      res.json(response.data);
    }).catch((error) => {
      console.error(error);
    });
  });
  return router;
};