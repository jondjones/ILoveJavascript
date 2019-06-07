var todoData = new Todos();

// Event Handlers
document.querySelector('#clear-todo').addEventListener('click', () => {
    todoData.reset();
    createTodoHtml(todoData);
});

document.querySelector('#search-todos').addEventListener('input', (e) => {
    todoData.updateSearchText(e.currentTarget.value);
    createTodoHtml(todoData);
});

document.querySelector('#filter-todos').addEventListener('change', (e) => {
    const value = e.currentTarget.value;

    if (value == 'ZA') {
        todoData.sortTodosReverse();
    } else if (value == 'AZ') {
        todoData.sortTodos();
    } else if (value == 'completed') {
        todoData.sortTodosByCompleted();
    } else if (value == 'added') {
        todoData.sortTodosByAdded();
    } else if (value == 'edited') {
        todoData.sortTodosByEdited();
    }

    createTodoHtml(todoData);
});

// Sync notes beetween browser tabs
window.addEventListener('storage', function (e) {
    if (e.key === storeLocalName) {
        todoData.currentTodos = JSON.parse(e.newValue);
        createTodoHtml(todoData);
    }
});

createTodoHtml(todoData);