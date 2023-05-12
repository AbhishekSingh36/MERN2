const router = require('express').Router();
const x = require('../controllers/currencies.controller')

router.get('/currencies', x.getCurrencies)
router.get('/currencies/:symbol', x.getCurrencyFromSymbol)

module.exports = router