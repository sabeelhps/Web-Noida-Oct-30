// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log(res.data.ticker.price);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


async function getData() {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log(res.data.ticker.price);
}


try {
    getData(); 
}
catch (e) {
    console.log(e);
}
