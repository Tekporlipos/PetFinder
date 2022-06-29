var express = require('express');
var router = express.Router();
const {getToken,getPets} = require("../services/service")
const {checkKey, checkToken} = require("./middleware/middleware")

var error = {
  "type": "https://www.petfinder.com/developers/v2/docs/errors/ERR-00002/",
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

/* GET api listing. */


router.use(checkKey);
router.use(checkToken);

router.get('/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
      getAllPet  =  await getPets("https://api.petfinder.com/v2/animals",req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});



router.get('/animals/:id/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets(`https://api.petfinder.com/v2/animals/${req.params.id}`,req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});


router.get('/types/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets("https://api.petfinder.com/v2/types",req.cookies.api_access_token)
  }
  res.json(getAllPet.data);
});


router.get('/types/:type/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets(`https://api.petfinder.com/v2/types/${req.params.type}`,req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});



router.get('/types/:type/breeds/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets(`https://api.petfinder.com/v2/types/${req.params.type}/breeds`,req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});



router.get('/organizations/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets("https://api.petfinder.com/v2/organizations",req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});



router.get('/organizations/:id/:key', async (req, res) => {
  let  getAllPet = error;
  if(req.cookies.api_access_token !=null){
    getAllPet  =  await getPets(`https://api.petfinder.com/v2/organizations/${req.params.id}`,req.cookies.api_access_token)
  }
  res.send(getAllPet.data);
});



module.exports = router;
