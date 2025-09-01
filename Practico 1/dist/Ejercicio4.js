"use strict";
// Ejercicio 4: UML - Interpretación del diagrama dado
// Clase abstracta Animal (en cursiva en UML - no se puede instanciar)
class AnimalUML {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Clase Pajaro hereda de AnimalUML e implementa Volador
class Pajaro extends AnimalUML {
    constructor(nombre, especie) {
        super(nombre); // Llama al constructor de la clase padre
        this.especie = especie;
    }
    // Implementación obligatoria del método abstracto de AnimalUML
    hacerSonido() {
        console.log(`${this.nombre} el ${this.especie} hace pío pío`);
    }
    // Implementación obligatoria del método de la interface Volador
    volar() {
        console.log(`${this.nombre} está volando`);
    }
    // Método para mostrar información (accede a protected nombre)
    mostrarInfo() {
        return `${this.nombre} es un ${this.especie}`;
    }
}
// Clase Zorro hereda de AnimalUML pero NO implementa Volador
class Zorro extends AnimalUML {
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }
    // Implementación obligatoria del método abstracto de AnimalUML
    hacerSonido() {
        console.log(`${this.nombre} el ${this.especie} hace diferentes sonidos`);
    }
    // Método para mostrar información
    mostrarInfo() {
        return `${this.nombre} es un ${this.especie}`;
    }
}
// Prueba del Ejercicio 4
console.log("=== Ejercicio 4: UML ===");
const pajaro = new Pajaro("Tweety", "canario");
const zorro = new Zorro("Robin", "zorro rojo");
// Mostrar información usando protected nombre
console.log(pajaro.mostrarInfo());
console.log(zorro.mostrarInfo());
// Demostrar polimorfismo y herencia
console.log("\nSonidos:");
pajaro.hacerSonido();
zorro.hacerSonido();
// Solo pajaro puede volar (implementa Volador)
console.log("\nVolar:");
pajaro.volar();
// Demostrar polimorfismo con array de animales
console.log("\nPolimorfismo:");
const animales = [pajaro, zorro];
animales.forEach(animal => {
    animal.hacerSonido(); // Cada uno suena diferente
});
//# sourceMappingURL=Ejercicio4.js.map