# Data Dashboard

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al progreso de las estudiantes para
apoyarlas en su aprendizaje.

La principal medida de progreso de una estudiante en Laboratoria es su avance
completando los proyectos.
Sin embargo, para completar estos proyectos las estudiantes acceden a contenidos
de aprendizaje (lecturas, videos, ejercicios y quizzes) en un sistema que
llamamos LMS (Learning Management System). El LMS acumula data sobre quién
leyó qué, qué ejercicios se han completado, los resultados de los quizzes, etc.

A pesar de que la data de progreso del LMS (ej. lecturas leídas, ejercicios
  completados, nota en quizzes, etc.) no impacta directamente la evaluación de
  una estudiante, sí es una pieza de información relevante que las TMs
  quisieran visualizar para tener un mejor entendimiento de cómo va cada
  estudiante en su proceso de aprendizaje.

 Así, el reto de este proyecto es crear una interfaz donde las TMs puedan
_ver_ y _usar_ la data de progreso del LMS. Para ello, creamos un
**data dashboard**.

## Introducción

![Alt text](Documents/banner.png?raw=true "Datadashboard")




#### 1) Definición del producto

En el `README.md` cuéntanos cómo pensaste y te acercaste a los usuarios al
desarrollar tu producto (Tip: entrevistas) y cuál fue tu proceso para definir
el producto final a nivel de experiencia y de interfaz. Es importante que
detalles:

* Quiénes son los principales usarios de producto.
* Cuáles son los objetivos de estos usarios en relación con el producto.
* Cuáles son los datos más relevantes que el usuario quiere ver en la interfaz y
  por qué. Cómo los descubriste.
* Cuándo revisa normalmente estos datos
* Cómo crees que el producto les está resolviendo sus problemas.
* Cómo fue tu proceso de diseño.

#### 2) Sketch de la solución (prototipo de baja fidelidad)

Debes realizar un Sketch (usando papel y lápiz) de tu solución, tomarle una
foto, subirla a tu repositorio y hacer mención del sketch en tu `README.md`.

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Realizamos un prototipado de alta fidelidad en Figma
https://www.figma.com/file/aueKPF43QJgxicRux8LFzij7/Data-Dashboard

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
has diseñado. Tendrás un tiempo limitado para hackear, así que deberás priorizar.

Sin embargo, como mínimo, tu implementación debe:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las alumnas de ese cohort
   - Para cada alumna:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar alumnas por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar alumnas por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.
4. Incluir pruebas unitarias.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
igual debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros.
