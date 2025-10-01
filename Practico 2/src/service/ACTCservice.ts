import Piloto from "../models/PilotoInterface";
import { category } from "../models/PilotoInterface";

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
        throw new Error('Funcion no implmentada')
    }

    public getPilotoByCategory(categ: category): Piloto[] | []{
        throw new Error('Funcion no implmentada')
    }
    //parametros: id uso 'id_autoincremental' y activo siempre 'true' cuando se crea
    public addPiloto(nombre: string, marca: string, categoria: category): Piloto {
        throw new Error('Funcion no implmentada')
    }

    public deletePiloto(idF: number): boolean {
        throw new Error('Funcion no implmentada')
    }

    public setActivo(idF: number, activo:boolean ): boolean {
        throw new Error('Funcion no implmentada')
    }
}