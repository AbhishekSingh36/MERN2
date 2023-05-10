const currencyJson = require('../currencydata.json')
const getCurrencies = (request, response) => {
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