console.log("welcom")

  /*setInterval(() => {
    const xhr=new XMLHttpRequest();
xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",true)
xhr.onload=function()
{
   
       // console.log(this.responseText)
        result=JSON.parse(this.response)
         let price=result.price
        
            document.getElementById('symbol').innerHTML=result.symbol
            document.getElementById('price').innerHTML=result.price
            
           

}
xhr.send();
}, 1000);
*/

var socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1d');
    
// When message received from web socket then...
socket.onmessage = function (event) {

    // Easier and shorter.
    var data = JSON.parse(event.data);
    var open= data.k.o;
    var curr=data.k.c;
    var curr_price=parseFloat(curr);
    var changes=((curr-open)/(curr))*100;
    const finalchages=(changes.toPrecision(2));
    document.getElementById('symbol').innerHTML=data.s;
    document.getElementById('price').innerHTML=curr_price;
    if(parseFloat(finalchages)>0){
        document.getElementById("changes").style.color = "green";
        document.getElementById('changes').innerHTML=finalchages;
        
      }else{
        document.getElementById("changes").style.color = "red";
        document.getElementById('changes').innerHTML=finalchages;

        }
    
}

var socket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1d');
    
// When message received from web socket then...
socket.onmessage = function (event) {

    // Easier and shorter.
    var data = JSON.parse(event.data);
    var open= data.k.o;
    var curr=data.k.c;
    var curr_price=parseFloat(curr);
    var changes=((curr-open)/(curr))*100;
    const finalchages=(changes.toPrecision(2));
    document.getElementById('symbol2').innerHTML=data.s;
    document.getElementById('price2').innerHTML=curr_price;
    if(parseFloat(finalchages)	>0){
        document.getElementById("changes2").style.color = "green";
        document.getElementById('changes2').innerHTML=finalchages;
        
      }else{
        document.getElementById("changes2").style.color = "red";
        document.getElementById('changes2').innerHTML=finalchages;

        }
    
}



