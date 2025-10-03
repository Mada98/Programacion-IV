import { Router } from "express";
import z from "zod";
import type ACTC from "../service/ACTCservice";

const pilotoSchema = z.object({
    nombre: z.string().min(3),
    marca: z.string().min(2),
    categoria: z.string().min(2)
})

const categoriaSchema = z.object({
    categoria: z.coerce.string().min(2)
})

export function makeActcRouter(service: ACTC) {
    const router = Router()

    router.get('/cat', (req, res) => {
        const parse = categoriaSchema.safeParse(req.query)
        if (!parse.success) {
            return res.status(400).json({ error: 'validationError', detail: 'Faltan datos' })
        }
        try {
            const listaPiloto = service.getPilotoByCategory(String(req.query.categoria))
            return res.status(200).json(listaPiloto)
        } catch (error) {
            return res.status(400).json({ error: 'Error al obtener los datos' })
        }
    })

    router.get('/:id', (req, res) => {
        try {
            const piloto = service.getPilotoById(Number(req.params.id))
            if (!piloto) return res.status(404).json({ error: 'Error: no existe un piloto con ese id' })
            return res.status(200).json(piloto)
        } catch (error) {
            return res.status(404).json({ error: 'Error al buscar al piloto' })
        }
    })

    router.post('/', (req, res) => {
        const parse = pilotoSchema.safeParse(req.body)
        if (!parse.success) {
            return res.status(400).json({ error: 'validationError', detail: 'Faltan datos' })
        }
        try {
            const { nombre, marca, categoria } = req.body
            const piloto = service.addPiloto(nombre, marca, categoria)
            return res.status(201).json(piloto)
        } catch (error) {
            return res.status(400).json({ error: 'Error al crear un piloto nuevo' })
        }
    })

    return router
}