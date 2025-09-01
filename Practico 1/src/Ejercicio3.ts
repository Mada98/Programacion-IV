// Ejercicio 3: Herencia y Polimorfismo
export abstract class Empleado {
    constructor(protected nombre:string, protected salarioBase:number) {
    }
    abstract calcularSalario(): number;
    abstract getName(): string
}

export class EmpleadoTiempoCompleto extends Empleado{
    
    private bono:number = 20000
    
    constructor(nombre:string, salarioBase:number){
        super(nombre, salarioBase)
    }

    getName(): string{
        return this.nombre
    }
    
    calcularSalario(): number {
        return this.salarioBase + this.bono
    }
}

export class EmpleadoMedioTiempo extends Empleado{
    
    constructor(nombre:string, salariobase:number){
        super(nombre, salariobase)
    }

    getName(): string{
        return this.nombre
    }
    
    calcularSalario(): number {
        return this.salarioBase * 0.5
    }
}

const emp1 = new EmpleadoTiempoCompleto('Marcos', 1560000)
const emp2 = new EmpleadoMedioTiempo('Lucas', 1560000)
const emp3 = new EmpleadoMedioTiempo('Juan', 1870000)
const emp4 = new EmpleadoTiempoCompleto('Amilcar', 1360000)
const emp5 = new EmpleadoMedioTiempo('Alejo', 1360000)

const empleados: Empleado[] = [emp1, emp2, emp3, emp4, emp5]

for (const empleado of empleados) {
    console.log(`El salario de ${empleado.getName()} es: ${empleado.calcularSalario()}`);
}