interface Electrico {
    cargarBateria(): void;
    nivelBateria(): number;
}

abstract class Vehiculo {
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }

    mostrarInfo(): void {
        console.log(`Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Anio: ${this.getAnio()}`);
    }

    abstract acelerar(): void;
    abstract frenar(): void;
}

class Auto extends Vehiculo {
    private numeroPuertas: number;

    constructor(marca: string, modelo: string, anio: number, numeroPuertas: number) {
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }

    getNumPuertas(): number {
        return this.numeroPuertas;
    }

    setNumPuertas(numeroPuertas: number): void {
        this.numeroPuertas = numeroPuertas;
    }

    acelerar(): void {
        console.log("El auto está acelerando");
    }

    frenar(): void {
        console.log("El auto está frenando");
    }

    abrirPuertas(): void {
        console.log("Las puertas del auto están abiertas");
    }
}

class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(marca: string, modelo: string, anio: number, cilindrada: number) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    acelerar(): void {
        console.log("La moto está acelerando");
    }

    frenar(): void {
        console.log("La moto está frenando");
    }

    hacerCaballito(): void {
        console.log("La moto está haciendo un caballito");
    }
}

class AutoElectrico extends Vehiculo implements Electrico {
    private bateriaMax: number = 100;
    private bateriaMin: number = 0;
    private consumoPorAceleracion: number = 5;
    private bateria: number;

    constructor(marca: string, modelo: string, anio: number, bateria: number) {
        super(marca, modelo, anio);
        this.bateria = bateria;
    }

    nivelBateria(): number {
        return this.bateria;
    }

    autonomiaEstimada(): number {
        return this.bateria / this.consumoPorAceleracion;
    }

    cargarBateria(): void {
        this.bateria = this.bateriaMax;
        console.log("Batería cargada al 100%");
    }

    acelerar(): void {
        if (this.bateria >= this.consumoPorAceleracion) {
            this.bateria -= this.consumoPorAceleracion;
            if (this.bateria < this.bateriaMin) {
                this.bateria = this.bateriaMin;
            }
            console.log(`El auto eléctrico está acelerando. Batería restante: ${this.bateria}%`);
        } else {
            console.log("Batería insuficiente para acelerar");
        }
    }

    frenar(): void {
        console.log("El auto eléctrico está frenando");
    }

    modoEcoActivo(): boolean {
        return this.bateria < 20;
    }
}

// Prueba del Ejercicio 5
console.log("=== Ejercicio 5: Herencia e Interfaces ===");

// Crear instancias de cada tipo de vehículo
const auto = new Auto("Toyota", "Corolla", 2023, 4);
const moto = new Moto("Honda", "CBR", 2022, 600);
const autoElectrico = new AutoElectrico("Tesla", "Model 3", 2024, 80);

// Mostrar información básica de cada vehículo
console.log("\n--- Información de vehículos ---");
auto.mostrarInfo();
moto.mostrarInfo();
autoElectrico.mostrarInfo();

// Probar métodos específicos de cada clase
console.log("\n--- Métodos específicos ---");
console.log(`Auto tiene ${auto.getNumPuertas()} puertas`);
auto.abrirPuertas();

console.log(`Moto tiene ${moto.getCilindrada()}cc`);
moto.hacerCaballito();

console.log(`Auto eléctrico tiene ${autoElectrico.nivelBateria()}% de batería`);
console.log(`Autonomía estimada: ${autoElectrico.autonomiaEstimada()} aceleraciones`);
console.log(`Modo eco activo: ${autoElectrico.modoEcoActivo()}`);

// Probar funcionalidad eléctrica
console.log("\n--- Funcionalidad eléctrica ---");
autoElectrico.acelerar();
autoElectrico.acelerar();
console.log(`Batería después de acelerar: ${autoElectrico.nivelBateria()}%`);
autoElectrico.cargarBateria();
console.log(`Batería después de cargar: ${autoElectrico.nivelBateria()}%`);

// Demostración de polimorfismo con array de vehículos
console.log("\n--- Polimorfismo ---");
const vehiculos: Vehiculo[] = [auto, moto, autoElectrico];

// Todos pueden acelerar y frenar (métodos abstractos implementados)
vehiculos.forEach((vehiculo, index) => {
    console.log(`\nVehículo ${index + 1}:`);
    vehiculo.mostrarInfo();
    vehiculo.acelerar(); // Cada uno acelera diferente
    vehiculo.frenar();   // Cada uno frena diferente
});

// Demostración de interfaz Electrico
console.log("\n--- Uso de interfaz Electrico ---");
const dispositivosElectricos: Electrico[] = [autoElectrico];
dispositivosElectricos.forEach(dispositivo => {
    console.log(`Nivel de batería: ${dispositivo.nivelBateria()}%`);
    dispositivo.cargarBateria();
});