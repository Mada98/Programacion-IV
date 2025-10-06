# Practico 2 - Programacion IV

## Ejecutar
```bash
npm i
```

## Tema del Mini-Proyecto

Una API para gestionar pilotos de las distintas categorias de la ACTC

## User Stories

+ US1: "como cliente quiero buscar un piloto segun su id para ver su informacion"
+ US2: "como cliente quiero ver los pilotos que pertenecen a una categoria en especifico"
+ US3: "como cliente quiero agregar un piloto a una categoria"
+ US4: "como cliente quiero eliminar un piloto de una categoria"
+ US5: "como cliente quiero modificar el estado del piloto (activo o no)"

## Curls para testear al API

### GET

+ Obtener un piloto por el ID

```bash
curl http://localhost:3000/actc/pilotos/:id
```

+ Obtener una lista de pilotos segun una categoria
```bash
curl http://localhost:3000/actc/pilotos/cat?categoria=""
```

### DELETE

+ Eliminar un piloto por ID
```bash
curl -X DELETE http://localhost:3000/actc/pilotos/:id
```

### PUT

+ Obtener todos los Prestamos realizados

```bash
curl -X PUT http://localhost:3000/actc/pilotos/:id \
  -H "Content-Type: application/json" \
  -d '{
  "activo":true
}'
```

### POST

+ Agregar un piloto
```bash
# Los tipos de categorias son: TC, TCP, TCPK, TCPPK, TC2000, TP y TN
curl -X POST http://localhost:3000/actc/pilotos \
  -H "Content-Type: application/json" \
  -d '{
  "nombre":"Werner",
  "marca":"Toyota",
  "categoria":"TCPK"
}'
```

## Integrantes del grupo
+ Mateo Avila Baez
+ Ramiro Gabeiras
+ Gino Robla Belleggia
+ Lautaro Carrio