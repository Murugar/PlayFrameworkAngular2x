import {Injectable} from '@angular/core';
import {TodoStore} from './todo.store';

export interface ITodo {
    completed: Boolean;
    editing: Boolean;
    title: String;
}

@Injectable()
export class LocalStorageTodoStore implements TodoStore {
    public todos: ITodo[];

    constructor() {
       this.todos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    }

    public allCompleted() {
        return this.todos.length === this.getCompleted().length;
    }

    public setAllTo(completed: Boolean) {
        this.todos.forEach((t: ITodo) => t.completed = completed);
        this.updateStore();
    }

    public removeCompleted() {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    }

    public getRemaining() {
        return this.getWithCompleted(false);
    }

    public getCompleted() {
        return this.getWithCompleted(true);
    }

    public toggleCompletion(todo: ITodo) {
        todo.completed = !todo.completed;
        this.updateStore();
    }

    public remove(todo: ITodo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    }
    
    public add(t: String) {
        
        var todo1 : ITodo = {
                completed: false,
                editing: false,
                title: t
            };
    
        const todo: ITodo = todo1;
        this.todos.push(todo);
        this.updateStore();
    }

    private updateStore() {
        localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
    }

    private getWithCompleted(completed: Boolean) {
        return this.todos.filter((todo: ITodo) => todo.completed === completed);
    }
}
