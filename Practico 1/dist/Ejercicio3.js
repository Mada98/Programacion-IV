"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoMedioTiempo = exports.EmpleadoTiempoCompleto = exports.Empleado = void 0;
// Ejercicio 3: Herencia y Polimorfismo
class Empleado {
    constructor(nombre, salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
}
exports.Empleado = Empleado;
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioBase) {
        super(nombre, salarioBase);
        this.bono = 20000;
    }
    getName() {
        return this.nombre;
    }
    calcularSalario() {
        return this.salarioBase + this.bono;
    }
}
exports.EmpleadoTiempoCompleto = EmpleadoTiempoCompleto;
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, salariobase) {
        super(nombre, salariobase);
    }
    getName() {
        return this.nombre;
    }
    calcularSalario() {
        return this.salarioBase * 0.5;
    }
}
exports.EmpleadoMedioTiempo = EmpleadoMedioTiempo;
const emp1 = new EmpleadoTiempoCompleto('Marcos', 1560000);
const emp2 = new EmpleadoMedioTiempo('Lucas', 1560000);
const emp3 = new EmpleadoMedioTiempo('Juan', 1870000);
const emp4 = new EmpleadoTiempoCompleto('Amilcar', 1360000);
const emp5 = new EmpleadoMedioTiempo('Alejo', 1360000);
const empleados = [emp1, emp2, emp3, emp4, emp5];
for (const empleado of empleados) {
    console.log(`El salario de ${empleado.getName()} es: ${empleado.calcularSalario()}`);
}
//# sourceMappingURL=Ejercicio3.js.map