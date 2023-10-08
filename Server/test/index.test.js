const login = require('../src/utils/users');
const axios = require('axios');
const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
            await agent.get('/rickandmorty/character/vgh').expect(500);
        })
        
        it('Si hay un error responde con status: 500', async () => {
            const res = await agent.get(`/rickandmorty/character/a`);
            expect(res.statusCode).toBe(500);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const res = await agent.get('/rickandmorty/character/1');
            expect(res.body).toHaveProperty('id'&&'name'&&'gender'&&'status'&&'origin'&&'image');
        })
    });
    
    describe("GET /rickandmorty/login", () => {
        let array = [];
        let users = [
            {email: 'luca.bruzzone95@gmail.com', password: '12345678'},
            {email: 'luca.bruz95@gmail.com', password: '12345678'},
            {email: 'luca.bruzzone95@gmail.com', password: '12678'},
            {email: 'luca.bruzzone95@gm.com', password: '12345678'}
        ];
        users = users.map(user => {
            return `?email=${user.email}&password=${user.password}`
        })
    
        it('login success true', async () => {
            for (let i = 0; i < users.length; i++) {
                const response = await agent.get(`/rickandmorty/login/${users[i]}`);
                array.push(response.body);
            }
            expect(array[0].access).toEqual(true);
        })
        it('login success false', async () => {
            for (let i = 0; i < users.length; i++) {
                const response = await agent.get(`/rickandmorty/login/${users[i]}`);
                array.push(response.body);
            }
            expect(array[1].access).toEqual(false);
            expect(array[2].access).toEqual(false);
            expect(array[3].access).toEqual(false);
        })
    });
    
    describe("POST /rickandmorty/fav", () => {
        const character1 = {id: 1, name: 'Rick'};
        const character2 = {id: 2, name: 'Morty'};

        it('Lo que envíes por body debe ser devuelto en un arreglo', async () => {
            const res = await agent.post('/rickandmorty/fav').send(character1);
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body).toContainEqual(character1);
        })

        it('devuelve todos los favoritos', async () => {
            const res = await agent.post('/rickandmorty/fav').send(character2);
            expect(res.body).toContainEqual(character1);
            expect(res.body).toContainEqual(character2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = {id: 1, name: 'Rick'};
        const character2 = {id: 2, name: 'Morty'};
        beforeEach(async () => {
            await agent.post('/rickandmorty/fav').send(character1);
            await agent.post('/rickandmorty/fav').send(character2);
        })
        it('que devuelva todo el arreglo sin modificar si el id es válido', async () => {
            const res = await agent.delete('/rickandmorty/fav/5');
            expect(res.body).toContainEqual(character1);
            expect(res.body).toContainEqual(character2);
        })
        it('cuando envías un ID válido se elimine correctamente al personaje', async () => {
            const res = await agent.delete('/rickandmorty/fav/1');
            expect(res.body).not.toContainEqual(character1);
            expect(res.body).toContainEqual(character2);

            const res2 = await agent.delete('/rickandmorty/fav/2');
            expect(res2.body).not.toContainEqual(character2);
            expect(res2.body).toEqual([]);
        })
    })
});

