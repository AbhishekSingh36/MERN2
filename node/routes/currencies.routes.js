const router = require('express').Router();
const x = require('../controllers/currencies.controller')
// prefix + /
// currencies/currencies
// router.get('/currencies', x.getCurrencies)

// // we came here using . currencies ---> currencies/currencies/symbol
// router.get('/currencies/:symbol', x.getCurrencyFromSymbol)
// --------- Solution ---------

router.get('/', x.getCurrencies)
router.get('/:symbol', x.getCurrencyFromSymbol)

module.exports = router