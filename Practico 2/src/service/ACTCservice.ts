import Piloto from "../models/PilotoInterface";
import { category } from "../models/PilotoInterface";
import { validCategories } from "../models/PilotoInterface";

export default class ACTC {

    private pilotosList: Piloto[] = []
    private id_autoincremental: number = 1

    //funcion solo para chequear la lista
    public getPilotos(): Piloto[] {
        return this.pilotosList
    }
    //funcion para chequear tamaño de la lista
    public getSize():number {
        return this.pilotosList.length
    }

    public getPilotoById(idF: number): Piloto | undefined {
        const piloto = this.pilotosList.find(p => p.id === idF)
        if(!piloto){
            return undefined
        }
        return piloto
    }

    public getPilotoByCategory(categ: string): Piloto[] | []{
        const listaPilt = this.pilotosList.filter(p => p.categoria === categ)
        return listaPilt
    }
    //parametros: id uso 'id_autoincremental' y activo siempre 'true' cuando se crea
    public addPiloto(newNombre: string, newMarca: string, newCategoria: category): Piloto {
        if(!validCategories.includes(newCategoria)){
            throw new Error
        }
        const newPiloto:Piloto = { id: this.id_autoincremental++, nombre:newNombre, marca:newMarca, categoria:newCategoria, activo:true }
        this.pilotosList.push(newPiloto)
        return newPiloto
    }

    public deletePiloto(idF: number): boolean {
        throw new Error('Funcion no implmentada')
    }

    public setActivo(idF: number, activo:boolean ): boolean {
        throw new Error('Funcion no implmentada')
    }
}