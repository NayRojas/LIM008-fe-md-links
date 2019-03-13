# Markdown Links
Libreria que analizar archivos markdown extrayendo sus links, para mostrarte su ruta, texto y el estado de los links.

## Versión
1.0.0

## Homepage
[GitHub Nayllen Rojas](https://github.com/NayRojas/LIM008-fe-md-links)

## Instalación

 Agregue el modulo a su proyecto, instalando:
 ```
 npm install --g nayrojas-mdlinks
 ```
## Flujograma

El siguiente flujograma representa el algoritmo que soluciona el problema, mostrando las fases de implementación y los procesos inmersos en cada una de estas. 
 
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
****
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
****
## Documentación técnica de la librería

Visita los links para conocer el backlog e implementación de la librería.

- Github project
 ```
https://github.com/NayRojas/LIM008-fe-md-links/projects
 ```
- Planning information
```
https://github.com/NayRojas/LIM008-fe-md-links/projects
 ```

**Duración**: 3 semanas.

**Metodología**: Scrum

### **Sprint 1**

Durante este sprint se realiza el algoritmo que dará solución al problema _extraer links de archivos markdown y presentar datos sobre estos_. Para esto se emplea:

- Pseudocódigo, describiendo los pasoa a seguir del problema
- Tabla, con la descripción de cada función que interviene en el proceso, estableciendo su input, output y tipo de dato.

### **Sprint 2**

Se empiezan con los tests para dar inicio al proceso de testeo de las funciones descritas en la tabla de análisis, de esta forma aseguramos que cada función cumpla con lo establecido en el algoritmo antes diseñado.

Ademas de ello, se aborda la etapa de **ingreso de la ruta** (ver flujograma).

### **Sprint 3**

Las secciones **Lectura de la ruta y opciones** , son el alcance de este sprint, por ende se itera sobre el flujograma, y tests a fin de afinar el proceso de acuerdo a los bugs encontrados y refactorización sugeridas.

#### Aspectos adicionales

Tecnologías empleadas | Softskills
------------ | -------------
Javascript | Autoaprendizaje
NodeJS | Pensamiento abstracto
NPM | Solución de problemas
Node-fetch | Trabajo en equipo
Babel | Manejo de estrés
fetch-mock  | Growth mindset
Expresiones regulares| 
Github| 
Markdown| 



****
Agradecimientos especiales a @Laboratoria :+1: 

Cualquier _pullrequest_  será bienvenido para refactorización :raising_hand:

