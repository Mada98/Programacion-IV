// Ejercicio 3: Herencia y Polimorfismo
abstract class Empleado {
    nombre: string;
    salarioBase: number;

    constructor(nombre: string, salarioBase: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    abstract calcularSalario(): number;
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre: string, salarioBase: number) {
        super(nombre, salarioBase);
    }

    calcularSalario(): number {
        return this.salarioBase + 20000;
    }
}

class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre: string, salarioBase: number) {
        super(nombre, salarioBase);
    }

    calcularSalario(): number {
        return this.salarioBase * 0.5;
    }
}

// Prueba del Ejercicio 3 - Polimorfismo
console.log("=== Ejercicio 3: Herencia y Polimorfismo ===");
const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("Juan Pérez", 50000),
    new EmpleadoMedioTiempo("María González", 40000),
    new EmpleadoTiempoCompleto("Carlos López", 60000),
    new EmpleadoMedioTiempo("Ana Martínez", 45000)
];

empleados.forEach(empleado => {
    console.log(`${empleado.nombre}: Salario = $${empleado.calcularSalario()}`);
});