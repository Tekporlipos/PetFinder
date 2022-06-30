var express = require('express');
var express = require('express');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();
const {addData,geData} = require("./api/module/localDatabase")
const  {DataBase}  = require("./api/module/DataBase")

let  error = {
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

/* GET home page. */
router.get('/', function(req, res, next) {
  let  key= req.cookies.key;
  if(req.cookies.key == null){
    key = "Generate key now for free";
  }
  res.render('index', { newKey: key });
});

router.post("/auth/api/key",(req,res)=>{
  const name = req.query.name,
      organisation = req.query.organisation,
      location = req.query.location,
      key = uuidv4();

  const keys = {key:key}

  if(addData(new DataBase(name,organisation,location,key,Date.now()))){
    res.cookie('key', keys.key ,
        { expires: new Date(Date.now() + 60*60*24*28), httpOnly: true });
    res.json(keys);
  }else {
    res.json(error);
  }
})

module.exports = router;
