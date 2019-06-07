class Todos {
    constructor() {
        this.store = new Store();
        this.storeLocalName = 'store';
        this.todos = this.store.getFromStore(this.storeLocalName);
        this.filters = {
            searchText: '',
            completed: false};
    };

    filterTodosByTitle() {
        return this.todos.filter((todo) => {
            return todo.title.toLowerCase().includes(this.filters.searchText.toLowerCase());
        });
    };

    get currentTodos()
    {
        if (this.todos !== null) {
            return (this.filters === null) ? this.todos : this.filterTodosByTitle();
        };

        return null;
    };

    set currentTodos(todos)
    {
        this.todos = todos;
    };

    get currentFilters()
    {
        return this.filters;
    };

    removeTodo(id) {
        const removedItemIndex = this.todos.findIndex((todo) => {
            return todo.id === id
        });
    
        if (this.todos != -1) {
            this.todos.splice(removedItemIndex, 1);
            this.store.saveToStore(this.storeLocalName, this.todos);
        }
    }

    updateSearchText(searchText) {
        this.filters.searchText = searchText;
    }

    reset() {
        this.todos = null;  
        this.filters = {
            searchText: '',
            completed: false};

        this.store.clearStore();
    }

    findTodoByTitle(searchTerm) {
        return this.todos.find((todo) => {
            return todo.title.toLowerCase() === searchTerm.toLowerCase();
        });
    }
    
    findTodoById(id) {
        return this.todos.find((todo) => {
            return todo.id === id;
        });
    }
    
    sortTodos() {
        this.todos.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
                return 1;
            }
    
            return 0;
        });
    };
    
    sortTodosReverse() {
        this.todos.sort((a,b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1
            } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return 1;
            }
    
            return 0;
        });
    };
    
    sortTodosByCompleted() {
        this.todos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1
            } else if (!b.completed && a.completed) {
                return 1;
            }
    
            return 0;
        });
    };
    
    sortTodosByEdited() {
        this.todos.sort((a,b) => {
            if (b.edited < a.edited) {
                return -1
            } else if (a.edited < b.edited) {
                return 1;
            }
            return 0;
        });
    };

    sortTodosByAdded() {
        this.todos.sort((a,b) => {
            if (a.created < b.created) {
                return -1
            } else if (b.created < a.created) {
                return 1;
            }
            return 0;
        });
    };
    
    addtodo(newtodo) {
        if (this.todos == null) {
            this.todos = [ newtodo ]; 
        } 
    
        const existingTodo = this.findTodoById(newtodo.id);
        if (existingTodo) {
            existingTodo.title = newtodo.title;
            existingTodo.completed = newtodo.completed;
            existingTodo.edited = newtodo.edited;
        } else {
            this.todos.push(newtodo);
        }

        this.store.saveToStore(this.storeLocalName, this.todos);
    };
    
    toogleTodoState(todo){
        const existingTodo = this.findTodoById(todo.id);
        if (existingTodo) {
            todo.completed = !todo.completed;
            todo.edited = moment().valueOf();
            this.store.saveToStore(this.storeLocalName, this.todos);
        }
    };
};