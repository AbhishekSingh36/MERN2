const x = require('..currencies.controller')

app.get('/currencies', x.getCurrencies)
app.get('/currencies/:symbol', x.getCurrencyFromSymbol)