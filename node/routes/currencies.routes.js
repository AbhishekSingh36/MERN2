const router = require('express').Router();
const currencyController = require('../controllers/currencies.controller')
// prefix + /
// currencies/currencies
// router.get('/currencies', x.getCurrencies)

// // we came here using . currencies ---> currencies/currencies/symbol
// router.get('/currencies/:symbol', x.getCurrencyFromSymbol)
// --------- Solution ---------

router.get('/', currencyController.getCurrencies)
router.get('/:symbol', currencyController.getCurrencyFromSymbol)

module.exports = router