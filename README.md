# Data Dashboard

## Introducción

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos.
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios completados, nota en quizzes, etc.) no impacta directamente la evaluación de
una estudiante, sí es una pieza de información relevante que las TMs
quisieran visualizar para tener un mejor entendimiento de cómo va cada
estudiante en su proceso de aprendizaje.

 Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, creamos un
**data dashboard**.

![Alt text](Documents/banner.png?raw=true "Datadashboard")

## Proceso de Diseño

![Alt text](Documents/proceso-de-diseño.png?raw=true "Proceso de Diseño")

#### 1) Descubrimiento e Investigación
La primera etapa en nuestro proceso de diseño fue la investigación, tuvimos una entrevista con la Training Manager, que en este caso es nuestro cliente, investigamos haciendole preguntas directas, como que tipo de información necesita ver de las alumnas dependiendo la sede, dependiendo el cohort y dependiendo el progreso de cada alumna.
Lo cual nos permitió visualizar el tipo de información que necesita el cliente.
El objetivo principal del cliente es poder visualizar el progreso de las alumnas, quienes van bien y quienes no tanto para poder ayudarlas. Tambien poder comparar la cantidad de alumnas que hay en cada cohort de manera rapida y ordenada.

#### 2) Analisis de Datos
Con los datos proporcionados por el cliente analizamos la posible solución de elaborar un dashboard con información concentrada en un sidebar con un buscador y un menú de 2 pestañas, en una informacion por cohorts mostrandolos con la cantidad de alumnas inscritas en el cohort y con un buscador por cohort y la otra pestaña para los datos de las alumnas, puede elegir una alumna en especifico del listado y se despliega la información de esta, su progreso general y el cohort en el que tiene el progreso, con la facilidad de ordenarlo por orden ascendente o descendente, todo esto en la menor cantidad de clicks posibles.

#### 3) Diseño de la solución (sketch prototipo de baja fidelidad)

Para plazmar las ideas del brainstorming diseñamos unos wireframes basicos en base a lo solicitado por el cliente.

Luego hicimos un scketch de baja fidelidad para ver de forma más clara como organizariamos las tareas e información que requiere el cliente.
![Alt text](Documents/1.png?raw=true "Login")
![Alt text](Documents/2.png?raw=true "Sedes")
![Alt text](Documents/3.png?raw=true "Cursos")
![Alt text](Documents/4.png?raw=true "Alumna")

#### 4) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
![Alt text](Documents/login.png?raw=true "Login")
![Alt text](Documents/Sedes.png?raw=true "Sedes")
![Alt text](Documents/Cursos.png?raw=true "Cursos")
![Alt text](Documents/Alumna.png?raw=true "Alumna")
Por ultimo realizamos el prototipado de alta fidelidad en Figma para ver mejor la solución que nos planteamos.

https://www.figma.com/file/aueKPF43QJgxicRux8LFzij7/Data-Dashboard

#### 5) Implementación

Desarrollamos el datadashboard remarcando la funcionalidad de los requerimientos minimos que solicitó el cliente, en este caso que se pueda seleccionar un cohort de una lista de cohorts, buscar alumnas por nombre, calcular grado de completitud de los cursos, ordenar alumnas por completitud general y especifico de lecturas, ejercicios autocorregidos y quiz.
La aplicación funciona sin problemas en distintos tamaños de pantallas: móviles, tablets y desktops.
Se incluyen pruebas unitarias.