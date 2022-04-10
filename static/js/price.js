console.log("hello ji")
setInterval(() => {
    const xhr=new XMLHttpRequest();
xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",true)
xhr.onload=function()
{
   
        //console.log(this.responseText)
        result=JSON.parse(this.response)
         let price=result.price
        
            document.getElementById('symbol').innerHTML=result.symbol
            document.getElementById('price').innerHTML=result.price
           

}
xhr.send();
}, 1000);
