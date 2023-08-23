const request = require('supertest');

describe('Teste de rotas ', () =>{
    it('deve retornar o status 200 ao acessar a rota /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    })

    it('deve retornar o status 404 ao acessar  uma rota inexistente ', async () => {
        const response = await request.get('/rota-inexistente');
        expect(response.status).toBe(404);
    })
});