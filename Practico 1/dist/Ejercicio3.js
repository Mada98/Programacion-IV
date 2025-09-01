"use strict";
// Ejercicio 3: Herencia y Polimorfismo
class Empleado {
    constructor(nombre, salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
}
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioBase) {
        super(nombre, salarioBase);
    }
    calcularSalario() {
        return this.salarioBase + 20000;
    }
}
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, salarioBase) {
        super(nombre, salarioBase);
    }
    calcularSalario() {
        return this.salarioBase * 0.5;
    }
}
// Prueba del Ejercicio 3 - Polimorfismo
console.log("=== Ejercicio 3: Herencia y Polimorfismo ===");
const empleados = [
    new EmpleadoTiempoCompleto("Juan Pérez", 50000),
    new EmpleadoMedioTiempo("María González", 40000),
    new EmpleadoTiempoCompleto("Carlos López", 60000),
    new EmpleadoMedioTiempo("Ana Martínez", 45000)
];
empleados.forEach(empleado => {
    console.log(`${empleado.nombre}: Salario = $${empleado.calcularSalario()}`);
});
//# sourceMappingURL=Ejercicio3.js.map