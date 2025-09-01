// Ejercicio 2: Clase Abstracta
// Clase abstracta (en cursiva en UML) - no se puede instanciar directamente
abstract class FiguraGeometrica {
    // # en UML indica protected - accesible por clases hijas
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // Método abstracto (en cursiva en UML) - debe ser implementado por las clases hijas
    abstract calcularArea(): number;

}

// Clase concreta que hereda de FiguraGeometrica
class Cuadrado extends FiguraGeometrica {
    // Propiedades privadas por defecto (- en UML)
    private lado: number;

    constructor(lado: number) {
        super("Cuadrado"); // Llamada al constructor de la clase padre y le paso el nombre, el usuario solo le pasa los datos geométricos
        this.lado = lado;
    }

    // Implementación obligatoria del método abstracto
    calcularArea(): number {
        return this.lado * this.lado; // Área = lado²
    }

    // Método público para mostrar información
    mostrarInfo(): string {
        return `${this.nombre}: lado=${this.lado}, área=${this.calcularArea()}`;
    }
}

// Clase concreta que hereda de FiguraGeometrica
class Triangulo extends FiguraGeometrica {
    // Propiedades privadas
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    // Implementación del método abstracto
    calcularArea(): number {
        return (this.base * this.altura) / 2; // Área = (base × altura) / 2
    }

    mostrarInfo(): string {
        return `${this.nombre}: base=${this.base}, altura=${this.altura}, área=${this.calcularArea()}`;
    }
}

// Clase concreta que hereda de FiguraGeometrica
class Circulo extends FiguraGeometrica {
    // Propiedad privada
    private radio: number;

    constructor(radio: number) {
        super("Circulo");
        this.radio = radio;
    }

    // Implementación del método abstracto
    calcularArea(): number {
        return Math.PI * this.radio * this.radio; // Área = π × radio²
    }

    mostrarInfo(): string {
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
const figuras: FiguraGeometrica[] = [cuadrado, triangulo, circulo];
console.log("\nPolimorfismo:");
figuras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
});