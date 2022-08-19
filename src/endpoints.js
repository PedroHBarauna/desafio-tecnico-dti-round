const callCityFromCoords = require('../calls/callCityFromCoords');
const callCityFromName = require('../calls/callCityFromName');
const callDefaultRequest = require('../calls/callDefaultRequest');

module.exports = function (app){

    app.get("/", (req, res) => {
        res.send(callDefaultRequest);
    });

    app.get("/name/:name", (req, res) => {
        try{
            const name = req.params.name;
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            callCityFromName(name, function(response){
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        catch(err){
            res.send(err);
        }
    });

    app.get("/coords/:lat/:lon", (req, res) => {
        try{
            const lat = req.params.lat;
            const lon = req.params.lon;
            res.set({ 'content-type': 'application/json; charset=utf-8' });
            callCityFromCoords(lat, lon, function(response){
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        catch(err){
            res.send(err);
        }
    })
}
