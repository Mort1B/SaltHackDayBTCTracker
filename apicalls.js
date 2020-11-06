// require ('dotenv').config();
// const Binance = require('node-binance-api');

// not used file
const fetch = require('node-fetch');
const axios = require('axios');


axios.get('http://api.coinlayer.com/api/live?access_key=')
  .then(res => console.log(res.data.rates));


// const client = new Binance().options({
//   apiKey: process.env.APIKEY,
//   apiSecret: process.env.SECRETKEY
// })

// const klineData = fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000')
//   .then(res => res.json())
//   .then(data => {
//     const cData = data.map(d => {
//       return {time:(d[0])/1000, open:parseFloat(d[1]), high:parseFloat(d[2]), low:parseFloat(d[3]), close:parseFloat([4])}
//     })
//   })
//   .catch(e => console.log(e))

//   console.log(klineData);

