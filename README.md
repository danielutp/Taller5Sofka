# Ejercicio caso práctico de una página dinámica
---
 
### Descripcion

En este taller desarrollamos un juego de dados para multiples jugadores, donde realizamos una pagina dinamica y aplicamos diferentes conceptos, plantilla(vista), logica (controlador), datos(modelo).

---
### Instrucciones para ejecutar el programa:
Para crear el programa se debe hacer con la siguiente url: 
```shell
http://localhost:3000/games/creategames
```
Para buscar un juego se debe buscar con la siguiente url: 
```shell
http://localhost:3000/games/"id del juego creado"
Ejemplo: http://localhost:3000/games/621c1dd53c860bdd2e1d96ec
```
Para hacer las apuestas al juego se hace con la siguiente url: 
```shell
http://localhost:3000/game/stargame/"id del juego creado"
Ejemplo: http://localhost:3000/game/stargame/621c283b47fd6a78097fb50a
```
Para conocer el id del ganador se hace con la siguiente url: 
```shell
http://localhost:3000/game/"id del juego de apuestas "gamebet" creado"/winner
Ejemplo: http://localhost:3000/game/621c29d447fd6a78097fb513/winner
```