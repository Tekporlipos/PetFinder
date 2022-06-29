var express = require('express');
var router = express.Router();
const  {getDataByKey,geData} = require("../api/module/localDatabase")

router.get('/getUsers', async (req, res) => {
    res.json(geData());
});



router.get('/getUsers/keys', async (req, res) => {
    res.json(geData());
});


router.get('/getUsers/keys/:key', async (req, res) => {
    res.json(getDataByKey(req.params.key));
});



module.exports = router;
