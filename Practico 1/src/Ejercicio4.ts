// Ejercicio 4: UML - Interpretación del diagrama dado

// <<interface>> en UML - define un contrato que deben cumplir las clases
interface Volador {
    // + en UML indica público
    volar(): void;
}

// Clase abstracta Animal (en cursiva en UML - no se puede instanciar)
abstract class AnimalUML {
    // # en UML indica protected - accesible desde clases hijas
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // Método abstracto (en cursiva en UML) - debe ser implementado por clases hijas
    abstract hacerSonido(): void;
}

// Clase Pajaro hereda de AnimalUML e implementa Volador
class Pajaro extends AnimalUML implements Volador {
    // - en UML indica private - solo accesible dentro de esta clase
    private especie: string;

    constructor(nombre: string, especie: string) {
        super(nombre); // Llama al constructor de la clase padre
        this.especie = especie;
    }

    // Implementación obligatoria del método abstracto de AnimalUML
    hacerSonido(): void {
        console.log(`${this.nombre} el ${this.especie} hace pío pío`);
    }

    // Implementación obligatoria del método de la interface Volador
    volar(): void {
        console.log(`${this.nombre} está volando`);
    }

    // Método para mostrar información (accede a protected nombre)
    mostrarInfo(): string {
        return `${this.nombre} es un ${this.especie}`;
    }
}

// Clase Zorro hereda de AnimalUML pero NO implementa Volador
class Zorro extends AnimalUML {
    // - en UML indica private
    private especie: string;

    constructor(nombre: string, especie: string) {
        super(nombre);
        this.especie = especie;
    }

    // Implementación obligatoria del método abstracto de AnimalUML
    hacerSonido(): void {
        console.log(`${this.nombre} el ${this.especie} hace diferentes sonidos`);
    }

    // Método para mostrar información
    mostrarInfo(): string {
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
const animales: AnimalUML[] = [pajaro, zorro];
animales.forEach(animal => {
    animal.hacerSonido(); // Cada uno suena diferente
});