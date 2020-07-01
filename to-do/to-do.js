const fs = require('fs');

let listToDo = [];

const create = (description) => {
    loadDb();
    let todo = {
        description,
        completed: false
    };

    listToDo.push(todo);
    save();

    return listToDo;
}

const save = () => {
    let data = JSON.stringify(listToDo);


    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}

const loadDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

    //console.log(listToDo);
}

const getAll = () => {
    loadDb();
    return listToDo;

    //console.log(listToDo);
}

const update = (description, completed = true) => {
    loadDb();

    let index = listToDo.findIndex(tarea => tarea.description === description);

    index > 0 ? listToDo[index].completed = completed :
        console.log(`No se econtró la tarea ${description}`);
    save();



    //console.log(listToDo);
}

const deleteToDo = (description) => {
    loadDb();

    let index = listToDo.findIndex(tarea => tarea.description === description);

    index > 0 ?
        listToDo.splice(index, 1) :
        console.log('No se borró la tarea');
    save();



    //console.log(listToDo);
}

module.exports = {
    create,
    getAll,
    update,
    deleteToDo
}