const server = require('http').createServer();
const api = require('binance');
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
})

const binanceWS = new api.BinanceWS(true);

io.on('connection', client => {
  function emitRates() {
      binanceWS.onKline('BTCUSDT', '1m', price => {
      client.emit('btc', {
        name: new Date().toLocaleTimeString(),
        value: price.kline.close
      })
    })
  }
  // this is the part that makes it repeat
  setTimeout(emitRates, 20000);
}
  // setInterval(() => {
  //   let timestamp = new Date().toLocaleTimeString();
  //   binanceWS.onKline('BTCUSDT', '1m', price => {
  //     client.emit('btc', {
  //       name: timestamp,
  //       value: price.kline.close
  //     })
  //   })
  // }, 15000);
)



server.listen(5000);
