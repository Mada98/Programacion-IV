"use strict";
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAnio() {
        return this.anio;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAnio(anio) {
        this.anio = anio;
    }
    mostrarInfo() {
        console.log(`Marca: ${this.getMarca()}, Modelo: ${this.getModelo()}, Anio: ${this.getAnio()}`);
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, anio, numeroPuertas) {
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }
    getNumPuertas() {
        return this.numeroPuertas;
    }
    setNumPuertas(numeroPuertas) {
        this.numeroPuertas = numeroPuertas;
    }
    acelerar() {
        console.log("El auto está acelerando");
    }
    frenar() {
        console.log("El auto está frenando");
    }
    abrirPuertas() {
        console.log("Las puertas del auto están abiertas");
    }
}
class Moto extends Vehiculo {
    constructor(marca, modelo, anio, cilindrada) {
        super(marca, modelo, anio);
        this.cilindrada = cilindrada;
    }
    getCilindrada() {
        return this.cilindrada;
    }
    setCilindrada(cilindrada) {
        this.cilindrada = cilindrada;
    }
    acelerar() {
        console.log("La moto está acelerando");
    }
    frenar() {
        console.log("La moto está frenando");
    }
    hacerCaballito() {
        console.log("La moto está haciendo un caballito");
    }
}
class AutoElectrico extends Vehiculo {
    constructor(marca, modelo, anio, bateria) {
        super(marca, modelo, anio);
        this.bateriaMax = 100;
        this.bateriaMin = 0;
        this.consumoPorAceleracion = 5;
        this.bateria = bateria;
    }
    nivelBateria() {
        return this.bateria;
    }
    autonomiaEstimada() {
        return this.bateria / this.consumoPorAceleracion;
    }
    cargarBateria() {
        this.bateria = this.bateriaMax;
        console.log("Batería cargada al 100%");
    }
    acelerar() {
        if (this.bateria >= this.consumoPorAceleracion) {
            this.bateria -= this.consumoPorAceleracion;
            if (this.bateria < this.bateriaMin) {
                this.bateria = this.bateriaMin;
            }
            console.log(`El auto eléctrico está acelerando. Batería restante: ${this.bateria}%`);
        }
        else {
            console.log("Batería insuficiente para acelerar");
        }
    }
    frenar() {
        console.log("El auto eléctrico está frenando");
    }
    modoEcoActivo() {
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
const vehiculos = [auto, moto, autoElectrico];
// Todos pueden acelerar y frenar (métodos abstractos implementados)
vehiculos.forEach((vehiculo, index) => {
    console.log(`\nVehículo ${index + 1}:`);
    vehiculo.mostrarInfo();
    vehiculo.acelerar(); // Cada uno acelera diferente
    vehiculo.frenar(); // Cada uno frena diferente
});
// Demostración de interfaz Electrico
console.log("\n--- Uso de interfaz Electrico ---");
const dispositivosElectricos = [autoElectrico];
dispositivosElectricos.forEach(dispositivo => {
    console.log(`Nivel de batería: ${dispositivo.nivelBateria()}%`);
    dispositivo.cargarBateria();
});
//# sourceMappingURL=Ejercicio5.js.map