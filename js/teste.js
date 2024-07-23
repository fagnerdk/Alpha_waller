

var ne = new WebSocket ('https://economia.awesomeapi.com.br/json/last/BTC-BRL')


ne.onmessage =(evt)=>{console.log(evt.data)}