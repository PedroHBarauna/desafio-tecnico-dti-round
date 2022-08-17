const StatusHumidityLow = require('./StatusHumidityLow');
const StatusTempHigh = require('./StatusTempHigh');
const StatusNoRisk = require('./StatusNoRisk');
const StatusIntenseCold = require('./StatusIntenseCold');
const StatusUnknow = require('./StatusUnknow');
const limitOfHighTemp = 30;
const limitOfLowTemp = 10;

module.exports = class Status {
    constructor(temp, humidity){
        this.temp = temp;
        this.humidity = humidity;
    }
    build(){
        if(this.humidity < limitOfHighTemp){
            return new StatusHumidityLow();
        }
        if(this.temp>limitOfHighTemp){
            return new StatusTempHigh();
        }
        if(this.temp>limitOfLowTemp & this.temp<limitOfHighTemp & this.humidity>limitOfHighTemp){
            return new StatusNoRisk();
        }
        if(this.temp<limitOfLowTemp){
            return new StatusIntenseCold();
        }

        return new StatusUnknow();
    }
}
