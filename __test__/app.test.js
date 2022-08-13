import request from 'supertest';
import app from '../app';

describe("app.js", () =>{
    test("request a object with the author's link, doc link and repository link", async ()=>{
        const res = await request(app).get("/");
        const defaultResponse = {
            'author_link': 'https://github.com/PedroHBarauna',
            'documentation_link': 'https://github.com/PedroHBarauna/desafio-tecnico-dti-round',
            'repository_link'  : 'https://github.com/PedroHBarauna/desafio-tecnico-dti-round',
        }
        expect(res.body).toEqual(defaultResponse); 
     })
})