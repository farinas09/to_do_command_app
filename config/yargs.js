const options = {
    description: {
        demand: true,
        alias: 'd'
    },
    complete: {
        alias: 'c',
        default: false
    }
}

const argv = require('yargs')
    .command('create', 'Crear una nueva tarea por hacer', options)
    .command('update', 'Actualizar el estado de una tarea', options)
    .command('show', 'Mostrar lista de tareas')
    .command('del', 'Elimina una tarea por hacer', options)
    .help()
    .argv;

module.exports = {
    argv
}