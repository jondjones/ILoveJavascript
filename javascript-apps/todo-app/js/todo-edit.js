var todoData = new Todos();

const idElement = document.querySelector('#todo-id');
const textElement = document.querySelector('#todo-text');
const button = document.querySelector('#todo-form-button');
const form = document.querySelector('#todo-form');

if (location.hash)
{   
    const noteId = location.hash.substr(1);
    const todo = todoData.findTodoById(noteId);
    idElement.value = todo.id;
    textElement.value = todo.title;
    button.textContent = "Edit Todo";

    const deleteButton = wireDeleteTodoButton(todo, currentTodos);
    form.appendChild(deleteButton);
}

// Add new note
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = e.target.elements.newtodo.value;
    e.target.elements.newtodo.value = '';

    if (!todoText) {
        return;
    }

    const idElement = document.querySelector('#todo-id');
    const id = idElement.value ? idElement.value : uuidv4();
    const timestamp = moment().valueOf();

    todoData.addtodo({
        title: todoText,
        completed: false,
        id: id,
        created: timestamp,
        edited: timestamp
    });
    location.assign('/index.html');
});

// Sync notes beetween browser tabs
window.addEventListener('storage', function (e) {
    if (e.key === storeLocalName) {
        todoData.currentTodos(JSON.parse(e.newValue));

        const noteId = location.hash.substr(1);
        todoData.findTodoById(noteId);
        textElement.value = todo.title;
    }
})
