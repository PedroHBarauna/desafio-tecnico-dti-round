const StatusHumidityLow = require('./StatusHumidityLow');
const StatusTempHigh = require('./StatusTempHigh');
const StatusNoRisk = require('./StatusNoRisk');
const StatusIntenseCold = require('./StatusIntenseCold');
const StatusUnknow = require('./StatusUnknow');

module.exports = class Status {
    constructor(temp, humidity){
        this.temp = temp;
        this.humidity = humidity;
    }
    build(){
        if(this.humidity < 30){
            return new StatusHumidityLow();
        }
        if(this.temp>30){
            return new StatusTempHigh();
        }
        if(this.temp>10 & this.temp<30 & this.humidity>30){
            return new StatusNoRisk();
        }
        if(this.temp<10){
            return new StatusIntenseCold();
        }
        
        return new StatusUnknow();
    }
}
