module.exports = class City {
    constructor(id, lat, lon, name, temp, humidity, status, cod){
        this.id = id;
        this.coords = {
            "lat": lat,
            "lon": lon,
        }
        this.name = name;
        this.temp = temp;
        this.humidity = humidity;
        this.status = status;
        this.cod = cod;
    }
}