import City from '../public/javascripts/City'
import Status from '../public/javascripts/Status';

describe("City.js", () =>{
    const city = new City(1, 'São Paulo', 32, 10);
    it("create the class City", () =>{
        expect(city.id).toEqual(1);
        expect(city.name).toEqual('São Paulo');
        expect(city.temp).toEqual(32);
        expect(city.humidity).toEqual(10);
    });
});

describe("Status.js", ()=>{
    const statusHumidityLow = new Status(30, 9);
    const statusTempHigh = new Status(31, 31);
    const statusNoRisk = new Status(29, 45);
    const statusIntenseCold = new Status(9, 40);
    const statusUnknow = new Status(30, 30);
    it("should return 'Umidade baixa'", () =>{
        expect(statusHumidityLow.build().getStatus()).toEqual("Umidade baixa");
    })
    it("should return 'Risco de Ensolação'", () =>{
        expect(statusTempHigh.build().getStatus()).toEqual("Risco de ensolação");
    })
    it("should return 'Nenhum risco iminente'", () =>{
        expect(statusNoRisk.build().getStatus()).toEqual("Nenhum risco iminente");
    })
    it("should return 'Frio intenso'", () =>{
        expect(statusIntenseCold.build().getStatus()).toEqual("Frio intenso");
    })
    it("should return 'Status desconhecido'", () =>{
        expect(statusUnknow.build().getStatus()).toEqual("Status desconhecido");
    })
})