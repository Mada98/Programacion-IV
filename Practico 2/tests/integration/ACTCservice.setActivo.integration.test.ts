import request from "supertest"
import Server from "../../src/app"
import { describe, it, expect } from "vitest"

describe('PUT /actc/pilotos/:id - validaciones', () => {
    const server = new Server(3000)
    const app = server.app

    it('PUT /actc/pilotos/:id ok (200)', async () => {
        //POST para que haya un dato guardado en memoria
        await request(app)
        .post('/actc/pilotos')
        .send({
            nombre: 'Julian Santero',
            marca: 'Ford',
            categoria: 'TC'
        })

        //PUT al piloto recien creado
        const id:number = 1
        const put = await request(app)
        .put(`/actc/pilotos/${id}`)
        .send({
            activo: false
        })
        expect(put.status).toBe(200)
        expect(put.body).toHaveProperty('message')
    })

    it('PUT /actc/pilotos/:id error (404)', async () => {
        //POST para que haya un dato guardado en memoria
        await request(app)
        .post('/actc/pilotos')
        .send({
            nombre: 'Julian Santero',
            marca: 'Ford',
            categoria: 'TC'
        })

        //PUT al piloto recien creado
        const id:number = 9
        const put = await request(app)
        .put(`/actc/pilotos/${id}`)
        .send({
            activo: false
        })
        expect(put.status).toBe(404)
        expect(put.body).toHaveProperty('error')
    })
})