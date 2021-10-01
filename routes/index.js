var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    title: "Techvico",
    posts: [
      {name: "duc"},
      {name: "giang"},
      {name: "cong"},
      {name: "tuan"}
    ]
  }
  res.render('index', data);
});

// router.get('/:name', function(req, res, next) {
//   let data = {title: "Demo", name: req.params.name}
//   res.render('index', data);
// });

module.exports = router;
