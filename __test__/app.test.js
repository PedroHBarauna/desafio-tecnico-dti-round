import request from 'supertest';
import app from '../app';

describe("app.js", () =>{
    test("request a hello world", async ()=>{
       const res = await request(app).get("/");
       expect(res.text).toEqual('Hello World'); 
    })
})