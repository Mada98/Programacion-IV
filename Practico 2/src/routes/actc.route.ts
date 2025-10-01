import { Router } from "express";
import z from "zod";
import type ACTC from "../service/ACTCservice";

const pilotoSchema = z.object({
    nombre: z.string().min(3),
    marca: z.string().min(2),
    categoria: z.string().min(2)
})

export function makeActcRouter(service:ACTC){
    const router = Router()

    router.post('/', (req, res) => {
        const parse = pilotoSchema.safeParse(req.body)
        if(!parse.success){
            return res.status(400).json({error: 'validationError', detail: 'Faltan datos'})
        }
        try{
            const {nombre, marca, categoria} = req.body
            const piloto = service.addPiloto(nombre, marca, categoria)
            return res.status(201).json(piloto)
        }catch(error){
            return res.status(400).json({error: 'Error al crear un piloto nuevo'})
        }  
    })

    return router
}