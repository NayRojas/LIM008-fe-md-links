# Markdown Links
Libreria que permite analizar archivos markdown visualizando el nombre, la dirección y el estado de los links..

## Versión
1.0.0

## Homepage
[GitHub Nayllen Rojas](https://github.com/NayRojas/LIM008-fe-md-links)

## Instalación
 ```
 Agregue el modulo a su proyecto, instalando:

 npm install --global nayllenrojas/mdLinks
 ```
## Flujograma
 
![Flujograma](https://i.ibb.co/JKNVQDT/Diagram.png)

## Guía de uso
 ```
md-links <path> <options>
 ```
- `path` : es la ruta de la carpeta o archivo.
- `option` :
  - `--validate` o `--v`: estas opción validan si el link funciona o no.
  - `--stats` o `--s`: estas opción muestran estadísticas de los links(existentes, rotos y únicos)
Al combinar las opciones mostrará la cantidad de links que hay, los rotos y  únicos.

## CLI (Línea de comandos)
 ```
md-links <path> <options>
 ```
Si desea retornar las propiedades **file, href y text**, ejecute: 

**$ md-links ./some/example.md**
```sh
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```
Si desea retornar las propiedades **file, href, text, status y value**, ejecute:

**$ md-links ./some/example.md --validate**
```sh 
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```
Si desea retornar las propiedades **total**(cantidad total de links) y **unique**(cantidad de links unicos), ejecute:

**$ md-links ./some/example.md --stats**
```sh
Total: 3
Unique: 3
```
Si desea retornar las propiedades **total**(cantidad total de links) y **unique**(cantidad de links unicos) y **broken** cantidad de links inactivos), ejecute:

**$ md-links ./some/example.md --s --v**
```sh
Total: 3
Unique: 3
Broken: 1
```

## Documentación técnica de la librería
 ```
## Un board con el backlog para la implementación de la librería.
 ```
 Duranción de 3 sprints 
