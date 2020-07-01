const argv = require('./config/yargs').argv;

const todo = require('./to-do/to-do');


let command = argv._[0];

switch (command) {
    case 'create':

        let tarea = todo.create(argv.description);
        console.log(tarea);
        break;
    case 'show':
        let listado = todo.getAll();
        for (let tarea of listado) {
            console.log('======= Por hacer =======');
            console.log(tarea.description);
            console.log('Estado', tarea.completed);
            console.log('=========================');
        }
        break;
    case 'update':
        todo.update(argv.description, argv.completed);
        break;
    case 'del':
        todo.deleteToDo(argv.description);
        break;
    default:
        console.log('command not found');
        break;
}