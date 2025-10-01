import request from "supertest"
import Server from "../../src/app"
import { describe, it, expect } from "vitest"

describe('GET /actc/pilotos/:id - validaciones', () => {
    const server = new Server(3000)
    const app = server.app

    it('GET /actc/pilotos/:id - ok (200)', async () => {
        //POST para que haya un dato guardado en memoria
        const res = await request(app)
        .post('/actc/pilotos')
        .send({
            nombre: 'Julian Santero',
            marca: 'Ford',
            categoria: 'TC'
        })
        //GET al piloto recien creado
        const id:number = 1
        const get = await request(app)
        .get(`/actc/pilotos/${id}`)
        expect(get.status).toBe(200)
        expect(get.body.nombre).toBe('Julian Santero')
    })

    it('GET /actc/pilotos/:id - error (404)', async () => {
        //POST para que haya un dato guardado en memoria
        const res = await request(app)
        .post('/actc/pilotos')
        .send({
            nombre: 'Julian Santero',
            marca: 'Ford',
            categoria: 'TC'
        })
        //GET al piloto recien creado
        const id:number = 5
        const get = await request(app)
        .get(`/actc/pilotos/${id}`)
        expect(get.status).toBe(404)
        expect(get.body).toHaveProperty('error')
    })
})