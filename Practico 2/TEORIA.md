
# PROGRAMACION IV - TRABAJO PRACTICO 2 - TEORIA

## 1- Ciclo Rojo -> Verde -> Refactor

El ciclo **Rojo -> Verde -> Refactor** pertenece a el enfoque TDD y representan tres pasos. El (Rojo) en el cual se escribe un test que falla, es decir define un comportamiento porque la funcionaliidad aun no existe. El (Verde) en el cual se implementa el codigo minimo necesario para que la prueba pase y el (Refactor) en el cual su funcion es limpar el codigo manteniendo los test en verde, se mejora la estructura del codigo sin alterar su comportamiento.

Este ciclo asegura que todas las funcionalidades del programa sean testeadas desde el inicio y genera un diseno limpio y mantenible. Es importante que el tamano de estos pasos sea lo menor posible ya que obtener retroalimentacion rapida, encontrar errores facilmente y mantener un avance controlado en el desarrollo.

## 2- Diferencie tests unitarios, de integración y E2E en APIs

Los **Test unitarios** prueban funcionalidades aisladas como pueden ser funciones o metodos, sin dependencias externas. Este tipo de testeos permite verificar la logica de las partes mas chicas del programa, su velocidad de ejecucion es la mas rapida. En el caso de los **Test de integracion** comprueban como funcionan varias partes del sistema. Entre estos la comunicacion entre modulos, la base de datos y la capa de red. El objetivo principal de este tipo de test es verificar el funcionamiente de interfaz y comunicacion, los cuales no se testean al probar modulos por separado. Por ultimo los test **E2E** o **End to End** en APIs, simulan el flujo completo, desde el cliente hasta la base de datos real y el servidor en ejecucion. Se comprueba todos los componente del porgrama: frontend, backend, base de datos, APIs externas. Este tipo de testeo son los mas lentos.

En conclucion las diferencias mas notables entre estos tipos de testeo son la velocidad de ejecucion y el alcanze de las pruebas, esta relacion se puede ver de manera grafica en la piramide de pruebas

![Diagrama de flujo](imagenes/Piramide.png)