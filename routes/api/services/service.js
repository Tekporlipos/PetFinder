const axios = require('axios').default;

const getToken  = async () =>{
    const req = {
        grant_type:"client_credentials",
        client_id:"2OZC5HXMbMcpQJyIfg5tvIufy7ooFwQ53x7CAGeb3iwCp5IgME",
        client_secret:"qjAfaPQ8D9zcuELIJe1HYwzb9GYNPx9LEfxvU3Vs",
    }
  const  token  = await makePostRequst("https://api.petfinder.com/v2/oauth2/token",req);
    return token;
}


const  getPets = async (url,api_access_token)=>{
    const  token  = await makeGetRequst(url,api_access_token);
    return token;
}



const makePostRequst = async (url,req)=>{
  return  axios.post(url, req).then((response)=>{
           return response;
        })
        .catch((error)=>{
            return error;
        }).then((response)=>{
            return response;
    });
}



const makeGetRequst = async (url,api_access_token="")=>{
    return  axios.get(url,
        {
            headers: {Authorization: "Bearer "+ api_access_token },
        }
        ).then((response)=>{
        return response;
    })
        .catch((error)=>{
            return error;
        }).then((response)=>{
            return response;
        });
}


module.exports = {getToken,getPets}



