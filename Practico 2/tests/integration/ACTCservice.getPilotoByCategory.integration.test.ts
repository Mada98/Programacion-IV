import request from "supertest"
import Server from "../../src/app"
import { describe, it, expect } from "vitest"

describe('GET /actc/pilotos/cat?categoria="" - validaciones', () => {
    const server = new Server(3000)
    const app = server.app

    it('GET /actc/pilotos/cat?categoria=TC - ok (200)', async () => {
        await request(app).post('/actc/pilotos').send({
            nombre: 'Mariano Werner',
            marca: 'Toyota',
            categoria: 'TCPK'
        })
        await request(app).post('/actc/pilotos').send({
            nombre: 'Gaston Mazzacane',
            marca: 'Toyota',
            categoria: 'TCPK'
        })
        await request(app).post('/actc/pilotos').send({
            nombre: 'German Todino',
            marca: 'Ford',
            categoria: 'TCPK'
        })
        await request(app).post('/actc/pilotos').send({
            nombre: 'Agustin Canapino',
            marca: 'Renault',
            categoria: 'TC2000'
        })
        const valor:string = 'TCPK'
        const get = await request(app)
        .get(`/actc/pilotos/cat?categoria=${valor}`)

        expect(get.status).toBe(200)
    })
})