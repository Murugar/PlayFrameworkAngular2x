import {Component} from '@angular/core';
import {ITodo} from './services/store';
import {TodoStore} from './services/todo.store';

@Component({
    selector:  'todo-app',
    templateUrl:  'assets/app/app.html',
})

export default class TodoAppComponent {
    public newTodoText = '';
    constructor(private todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    public stopEditing(todo: ITodo, editedTitle: string) {
        todo.title = editedTitle;
        todo.editing = false;
    }

    public cancelEditingTodo(todo: ITodo) {
        todo.editing = false;
    }

    public updateEditingTodo(todo: ITodo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }

        todo.title = editedTitle;
    }

    public editTodo(todo: ITodo) {
        todo.editing = true;
    }

    public removeCompleted() {
        this.todoStore.removeCompleted();
    }

    public toggleCompletion(todo: ITodo) {
        this.todoStore.toggleCompletion(todo);
    }

    public remove(todo: ITodo) {
        this.todoStore.remove(todo);
    }

    public addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    }
}
