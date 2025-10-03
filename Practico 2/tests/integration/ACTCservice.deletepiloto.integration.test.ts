import request from "supertest"
import Server from "../../src/app"
import { describe, it, expect } from "vitest"

describe('DELETE /actc/pilotos/:id - validaciones', () => {
    const server = new Server(3000)
    const app = server.app

    it('DELETE /actc/pilotos/:id - ok (204)', async () => {
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

        const id:number = 1
        const delt = await request(app)
        .delete(`/actc/pilotos/${id}`)
        expect(delt.status).toBe(204)
    })

    it('DELETE /actc/pilotos/:id - error (404)', async () => {
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

        const id:number = 9
        const delt = await request(app)
        .delete(`/actc/pilotos/${id}`)
        expect(delt.status).toBe(404)
        expect(delt.body).toHaveProperty('error')
    })
})