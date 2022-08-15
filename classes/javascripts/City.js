const Status = require("./Status");

module.exports = class City {
    constructor(id, lat, lon, name, temp, humidity, cod){
        this.id = id;
        this.coords = {
            "lat": lat,
            "lon": lon,
        }
        this.name = name;
        this.temp = temp;
        this.humidity = humidity;
        this.status = new Status(this.temp, this.humidity).build().getStatus();
        this.cod = cod;
    }
}