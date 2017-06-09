/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();
var path = require('path');
 
router.get('/', function(req, res, next) {
  res.sendfile(path.join(__dirname, '../', 'views', 'index.html'));
});
 
module.exports = router;
