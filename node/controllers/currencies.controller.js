const currencyJson = require('../currencydata.json')

const getCurrencies = (request, response) => {

  const correctPassword = verifyPassword(request.headers)
  if(!correctPassword){
    return response.sendStatus(403)
  }

  const minValue = request.query.min_value; //ask this in QnA
  if (minValue) {
    const data = currencyJson.data.filter(
      (currency) => Number(currency.min_size) === Number(minValue)
    );
    response.json(data); // ask this why response.json QnA
  } else {
    response.json(currencyJson);
  }
};

const getCurrencyFromSymbol = (request, response) => {
    const symbol = request.params.symbol
    //console.log(currency)
    const currencyData = currencyJson.data.find(
        (currency) => currency.id === symbol
      );
      if (currencyData) {
        response.json(currencyData)
      } else {
        response.sendStatus(404);
      }
}

module.exports = {getCurrencies, getCurrencyFromSymbol}