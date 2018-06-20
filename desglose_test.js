//rutas de archivos json
cohorts: require('../data/cohorts.json'),
progress: require('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'),
users: require('../data/cohorts/lim-2018-03-pre-core-pw/users.json'),

//Debe haber una funcion global, dentro deben estar las siguientes funciones 
>función computeUsersStats
//deberia obtener la sig info 
(users, progress, courses)
//'debería retornar arreglo de usuarios con propiedad stats'
//deberia ser un arreglo 
(user.hasOwnProperty('stats')
//deberia contener los sig objetos
isNumber(user.stats.percent);
isObject(user.stats.exercises);
isObject(user.stats.quizzes);
isObject(user.stats.reads);

//deber coincidir con validaciones que aparecen con alumna de prueba en linea 39

>función sortUsers
//deberia obtener la sig info 
users, orderBy, orderDirection
//deberia ordenar los datos de la siguiente manera: 
it('debería retornar arreglo de usuarios ordenado por nombre ASC');
it('debería retornar arreglo de usuarios ordenado por nombre DESC');
it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC');
it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC');
it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC');
it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC');
it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC');
it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC');
it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC');
it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC');
it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC');
it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC');

>función filterUsers
//deberia obtener la sig info 
(users, filterBy)
//'debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)'

>función processCohortData
//deberia obtener la sig info 
({ cohortData, orderBy, orderDirection, filterBy })
//'debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter'

