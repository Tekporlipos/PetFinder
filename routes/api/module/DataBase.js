class DataBase {
    constructor(name,organisation,location,key,date) {
        this.name = name;
        this.oragnisation = organisation;
        this.location = location;
        this.key = key;
        this.date = date;
    }
    getName(){
        return this.name;
    }
    getOragnisation(){
        return this.name;
    }
    getLocation(){
        return this.name;
    }
    getKey(){
        return this.name;
    }
    getDate(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
    setOragnisation(oragnisation){
        this.oragnisation = oragnisation;
    }
    setLocation(location){
        this.location = location;
    }
    setKey(key){
        this.name = key;
    }
    setDate(date){
        this.date = date;
    }


}

module.exports = {DataBase}