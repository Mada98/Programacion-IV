// Ejercicio 1: Interfaces
interface Animal {
    hacerSonido(): void;
    moverse(): void;
}

class Perro implements Animal {
    hacerSonido(): void {
        console.log("Guau!");
    }
    
    moverse(): void {
        console.log("El perro corre");
    }
}

// Prueba del Ejercicio 1
console.log("=== Ejercicio 1: Interfaces ===");
const perro = new Perro();
perro.hacerSonido();
perro.moverse();