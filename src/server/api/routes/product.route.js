var express = require('express');
var router = express.Router();

var controllers = require('../controllers/product.controller');

router.get('/', controllers.get);
router.post('/', controllers.postCreate);

module.exports = router;