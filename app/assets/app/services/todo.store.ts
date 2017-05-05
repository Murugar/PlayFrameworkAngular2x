import {ITodo} from './store';

export abstract class TodoStore {

    public abstract allCompleted(): boolean;

    public abstract setAllTo(completed: Boolean): void;

    public abstract removeCompleted(): void;

    public abstract getRemaining(): ITodo[];

    public abstract getCompleted(): ITodo[];

    public abstract toggleCompletion(todo: ITodo): void;

    public abstract remove(todo: ITodo): void;

    public abstract add(title: String): void;
}
