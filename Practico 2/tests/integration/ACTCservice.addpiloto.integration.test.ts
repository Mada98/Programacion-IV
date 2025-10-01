import request from "supertest"
import Server from "../../src/app"
import { describe, it, expect } from "vitest"

describe('POST /actc/pilotos - validacioones', () => {
    const server = new Server(3000)
    const app = server.app

    it("POST /actc/pilotos - ok (201)", async () => {
        const res = await request(app)
        .post('/actc/pilotos')
        .send({
            nombre:'Julian',
            marca:'Ford',
            categoria:'TC'
        })
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty('id');
    })

    it('POST /actc/pilotos - error (400) - faltan datos', async () => {
        const res = await request(app)
        .post('/actc/pilotos')
        .send({
            nombre:'Julian',
            marca:'Ford'
        })
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error');
    })

    it('POST /actc/pilotos - error (400) - categoria no existente', async () => {
        const res = await request(app)
        .post('/actc/pilotos')
        .send({
            nombre:'Julian',
            marca:'Ford',
            categoria:'TCPK789'
        })
        expect(res.status).toBe(400)
        expect(res.body).toHaveProperty('error');
    })
})

