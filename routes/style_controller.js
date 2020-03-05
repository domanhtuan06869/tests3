var express = require('express');
var router = express.Router();
var Style = new require('../model/style');
const withAuth = require('../middleware');

router.get('/getStyle', function (req, res) {
    Style.find({}).then((docs) => {
        res.send(docs)
    })
});

router.post('/postStyle',  function (req, res, next) {
    const { arrayStyle } = req.body
console.log(arrayStyle)
    const saveImage = new Style({ imgStyle:arrayStyle});
    saveImage.save();
    res.send(saveImage);
});

module.exports = router