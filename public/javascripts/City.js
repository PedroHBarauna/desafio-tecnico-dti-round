const Status = require("./Status");

module.exports = class City {
    constructor(id, name, temp, humidity){
        this.id = id;
        this.name = name;
        this.temp = temp;
        this.humidity = humidity;
        this.status = new Status(this.temp, this.humidity).build().getStatus();
    }
}