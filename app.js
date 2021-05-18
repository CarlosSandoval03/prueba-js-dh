/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
path = "tareas.json";

let fs = require('fs');

let leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
   let tareas = fs.readFileSync(path,'utf-8');
   return JSON.parse(tareas);
}
exports.leerTareas = leerTareas;

let agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
   let tareas = leerTareas();
   tareas.push(tarea);
   let jsonConvert = JSON.stringify(tareas);
   fs.writeFileSync(path,jsonConvert,'utf-8');
}
exports.agregarTarea = agregarTarea;

let filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
   let tareas = leerTareas();
   let filtradas = tareas.filter(function(tarea) {
       return tarea.status==estado
   })
   return filtradas
}
exports.filtrarTareasPorEstado = filtrarTareasPorEstado;