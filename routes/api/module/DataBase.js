class DataBase {
    constructor(name,organisation,location,key,date) {
        this.name = name;
        this.oragnisation = organisation;
        this.location = location;
        this.key = key;
        this.date = date;
    }
    _getName(){
        return this.name;
    }
    _getOragnisation(){
        return this.name;
    }
    _getLocation(){
        return this.name;
    }
    _getKey(){
        return this.name;
    }
    _getDate(){
        return this.name;
    }

    _setName(name){
        this.name = name;
    }
    _setOragnisation(oragnisation){
        this.oragnisation = oragnisation;
    }
    _setLocation(location){
        this.location = location;
    }
    _setKey(key){
        this.name = key;
    }
    _setDate(date){
        this.date = date;
    }


}

module.exports = {DataBase}