import City from '../classes/javascripts/City'
import Status from '../classes/javascripts/Status';

describe("should construct the class City", () =>{
    const status = new Status(32, 10).build().getStatus();
    const city = new City(1, -46.6361, -23.5475, 'São Paulo', 32, 10, status, 200);
    it("create the class City", () =>{
        expect(city.id).toEqual(1);
        expect(city.coords.lat).toEqual(-46.6361);
        expect(city.coords.lon).toEqual(-23.5475);
        expect(city.name).toEqual('São Paulo');
        expect(city.temp).toEqual(32);
        expect(city.humidity).toEqual(10);
        expect(city.status).toEqual("Umidade baixa");
        expect(city.cod).toEqual(200);
    });
});

describe("should construct the class Status", ()=>{

    const status = new Status(30, 30);

    it("should return the class Status", () =>{
        expect(status.temp).toEqual(30);
        expect(status.humidity).toEqual(30);
        expect(status.build()).toEqual(expect.anything());
    })

})

describe("should run method of StatusHumidityLow", ()=>{

    const statusHumidityLow = new Status(30, 9);

    it("should return 'Umidade baixa'", () =>{
        expect(statusHumidityLow.build().getStatus()).toEqual("Umidade baixa");
    })

})
describe("should run method of StatusTempHigh", ()=>{

    const statusTempHigh = new Status(31, 31);

    it("should return 'Risco de Ensolação'", () =>{
        expect(statusTempHigh.build().getStatus()).toEqual("Risco de ensolação");
    })

})

describe("should run method of StatusNoRisk", ()=>{

    const statusNoRisk = new Status(29, 45);

    it("should return 'Nenhum risco iminente'", () =>{
        expect(statusNoRisk.build().getStatus()).toEqual("Nenhum risco iminente");
    })
})

describe("should run method of StatusIntenseCold", ()=>{

    const statusIntenseCold = new Status(9, 40);

    it("should return 'Frio intenso'", () =>{
        expect(statusIntenseCold.build().getStatus()).toEqual("Frio intenso");
    })
})

describe("should run method of StatusUnknow", ()=>{

    const statusUnknow = new Status(30, 30);

    it("should return 'Status desconhecido'", () =>{
        expect(statusUnknow.build().getStatus()).toEqual("Status desconhecido");
    })

})