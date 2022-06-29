const {getToken} = require("../../services/service");
const  {getDataByKey} = require("../../module/localDatabase")
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

const checkToken = async (req,res,next)=>{
    if( (req.cookies.maxAge == null ? 0 : req.cookies.maxAge) < Date.now()){
        const token = await getToken()
        if(token.data != null){
            req.cookies.api_access_token = token.data.access_token;
        }else {
            req.cookies.api_access_token = error;
        }
    }
    next();
}
const checkKey = (req,res,next) => {
const  path  =req._parsedOriginalUrl.pathname.split("/");
  const  key =  path[path.length-1];

  const getKey = getDataByKey(key);
  if(getKey != null){
      next()
  }else{
      res.send(error);
  }



}


module.exports = {checkToken,checkKey}