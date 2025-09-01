"use strict";
// Ejercicio 2: Clase Abstracta
// Clase abstracta (en cursiva en UML) - no se puede instanciar directamente
class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Clase concreta que hereda de FiguraGeometrica
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super("Cuadrado"); // Llamada al constructor de la clase padre y le paso el nombre, el usuario solo le pasa los datos geométricos
        this.lado = lado;
    }
    // Implementación obligatoria del método abstracto
    calcularArea() {
        return this.lado * this.lado; // Área = lado²
    }
    // Método público para mostrar información
    mostrarInfo() {
        return `${this.nombre}: lado=${this.lado}, área=${this.calcularArea()}`;
    }
}
// Clase concreta que hereda de FiguraGeometrica
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }
    // Implementación del método abstracto
    calcularArea() {
        return (this.base * this.altura) / 2; // Área = (base × altura) / 2
    }
    mostrarInfo() {
        return `${this.nombre}: base=${this.base}, altura=${this.altura}, área=${this.calcularArea()}`;
    }
}
// Clase concreta que hereda de FiguraGeometrica
class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super("Circulo");
        this.radio = radio;
    }
    // Implementación del método abstracto
    calcularArea() {
        return Math.PI * this.radio * this.radio; // Área = π × radio²
    }
    mostrarInfo() {
        return `${this.nombre}: radio=${this.radio}, área=${this.calcularArea().toFixed(2)}`;
    }
}
// Prueba del Ejercicio 2
console.log("=== Ejercicio 2: Clase Abstracta ===");
const cuadrado = new Cuadrado(5);
const triangulo = new Triangulo(6, 8);
const circulo = new Circulo(3);
console.log(cuadrado.mostrarInfo());
console.log(triangulo.mostrarInfo());
console.log(circulo.mostrarInfo());
// Demostración de polimorfismo con array de figuras
const figuras = [cuadrado, triangulo, circulo];
console.log("\nPolimorfismo:");
figuras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
});
//# sourceMappingURL=Ejercicio2.js.map