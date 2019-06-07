const createTodoHtml = (todoData) => {
    const todosUl = document.querySelector('#todos');
    todosUl.innerHTML = '';

    const currenttodos  = todoData.currentTodos;
    if (currenttodos) {
        const documentFragment = addTodosIntoFragment(todoData);
        todosUl.appendChild(documentFragment);
        updateNumberOfTodos(currenttodos);
    };
};

const updateNumberOfTodos = (todos) => {
    const div = document.querySelector('#num-of-todo');
    div.textContent = todos.length;
}

const addTodosIntoFragment = (todoData) => {
    var documentFragment = document.createDocumentFragment();
    todoData.currentTodos.forEach((todo) => {

        const checkbox = wireCompletedTodoCheckbox(todo, todoData);
        const button = wireDeleteTodoButton(todo, todoData);

        const content = document.createElement('a');
        content.textContent = todo.title;
        content.setAttribute('href', `edit.html#${todo.id}`);

        const li = document.createElement('li');
        li.appendChild(checkbox);
        li.appendChild(content);
        li.appendChild(button);
        documentFragment.appendChild(li);
    });
    return documentFragment;
};

const wireDeleteTodoButton = (todo, todoData) => {
    const button = document.createElement('button');
        button.textContent = 'X';
        button.setAttribute('class', 'button');
        button.addEventListener('click', () => {
            todoData.removeTodo(todo.id);
            location.assign('/index.html');
        });

    return button;
}

const wireCompletedTodoCheckbox = (todo, todoData) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;

    checkbox.addEventListener('change', () => {
        todoData.toogleTodoState(todo);
        createTodoHtml(todoData);
    });

    return checkbox;
}