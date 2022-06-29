var express = require('express');
var router = express.Router();

var error = {
    "type": "https://montech-petfinder.herokuapp.com/documentation/errors/ERR-00002/",
    "status": 505,
    "title": "Invalid Request",
    "detail": "The request contains invalid parameters.",
    "invalid-params": [
        {
            "in": "query",
            "path": "type",
            "message": "test is not a valid animal type."
        }
    ]
}

router.get('/getUsers', async (req, res) => {
    let  getAllPet = error;

    res.send(getAllPet.data);
});



router.get('/getUsers/keys', async (req, res) => {
    let  getAllPet = error;

    res.send(getAllPet.data);
});


router.get('/getUsers/keys/:key', async (req, res) => {
    let  getAllPet = error;

    res.json(getAllPet.data);
});



module.exports = router;
