import { Router } from "express";
import z from "zod";
import type ACTC from "../service/ACTCservice";

export function     makeActcRouter(service:ACTC){
    const router = Router()

    router.post('/', (req, res) => {
        try{
            const {nombre, marca, categoria} = req.body
            const piloto = service.addPiloto(nombre, marca, categoria)
            return res.status(201).json(piloto)
        }catch(error){
            return res.status(400).json({message: 'Error al crear un piloto nuevo'})
        }  
    })

    return router
}