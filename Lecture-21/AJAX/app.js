// const response = `{"ticker":{"base":"ETH","target":"USD","price":"3322.70874171","volume":"163466.97368438","change":"-5.66781319"},"timestamp":1642330322,"success":true,"error":""}`
// const data = JSON.parse(response);
// console.log(data);
// console.log(data.ticker.price);


// Older way of sending the request
const request = new XMLHttpRequest();

// onload and onerror are the functions which are attached to the request object
request.onload = function () {
    const res = this.responseText;
    const data = JSON.parse(res);
    console.log(data.ticker.price);
}

request.onerror = function () {
    console.log(this);
}


request.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
request.send();


