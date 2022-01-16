

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.ticker.price);
    })
    .catch((err) => {
        console.log('Inside Catch')
        console.log(err.message);
    });