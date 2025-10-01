export type category = "TC" | "TCP" | "TCPK" | "TCPPK" | "TN" | "TP" | "TC2000"

export const validCategories: category[] = ["TC", "TCP", "TCPK", "TCPPK", "TN", "TP", "TC2000"];

export default interface Piloto {
    id:number
    nombre:string,
    marca:string,
    categoria:category,
    activo:boolean
}
