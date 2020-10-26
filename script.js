// Get quote  from api
async function getQuote() {
    const proxyUrl = 'https://cors-anywere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?mathod=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        getQuote()
        console.log('whoops , no quote', error);
    }
}
// on load
getQuote();