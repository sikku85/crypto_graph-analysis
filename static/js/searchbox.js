const text1=document.getElementById('textarea');
const title=document.getElementById('title');
const click=document.getElementById('buttonsearch')



function fun1(){
    var coinname=text1.value;
    coinname=coinname.toUpperCase();
    var api="https://api.binance.com/api/v3/ticker/price?symbol="+coinname;
    const xhr=new XMLHttpRequest();
xhr.open('GET',api,true)
xhr.onload=function()
{

   // console.log(this.responseText)
    result=JSON.parse(this.response)
     let price=result.price
    
        document.getElementById('current_price').innerHTML=result.price;
        document.getElementById('title').innerText=text1.value;
        
       

}
xhr.send();

}
click.addEventListener("click",fun1);