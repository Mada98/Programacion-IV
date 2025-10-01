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
    })
})

