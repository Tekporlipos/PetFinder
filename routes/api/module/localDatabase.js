const  {DataBase} = require("./DataBase")

let localDatabase = [
   new DataBase("John Dzikunu","TekporConsult","Ghana Takoradi","03a6aaf5-8d50-4db8-8403-61a8a5a36318",Date.now())
];

function addData(data) {
   if(!localDatabase.includes(data)){
       localDatabase.push(data);
       return true;
   }else{
    return false
   }
}

function geData() {
  return  localDatabase;
}

function getDataByKey(key) {
    let datavalue = null;
    localDatabase.forEach(data=>{
        if(data.key == key){
            datavalue = data;
        }

    })
   return  datavalue;
}

function getDataByOrganisation(organisation) {
    return  localDatabase.find((data)=>{data._getOragnisation == organisation})
}

module.exports = {addData,geData,getDataByKey,getDataByOrganisation}