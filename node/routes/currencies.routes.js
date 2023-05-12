const router = require('express').Router();
const x = require('..currencies.controller')

router.get('/currencies', x.getCurrencies)
router.get('/currencies/:symbol', x.getCurrencyFromSymbol)

module.exports = router