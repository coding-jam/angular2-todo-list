/**
 * Created by pizzo on 13/03/16.
 */
import {Injectable} from "angular2/core";
import {Todo} from "../models/todo";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TodoListService {

    private static LOCAL_STORAGE_KEY = "todoList";

    private _onStore = new Subject();

    store(todo: Todo) {
        let todos: Todo[] = this.getAll();
        // clono l'oggetto todo, non tocco quello in ingresso
        let newTodo = Object.assign({}, todo, {id : todo.id || todos.length + 1});
        todos.push(newTodo);
        this._onStore.next(newTodo);

        this.storeAll(todos);
    }

    onStore() {
        return this._onStore.asObservable();
    }

    storeAll(todos: Todo[]) {
        this.doInStorage(storage => {
            storage.setItem(TodoListService.LOCAL_STORAGE_KEY, JSON.stringify(todos))
        })
    }

    getAll() {
        return this.doInStorage(storage => {
            return JSON.parse(storage.getItem(TodoListService.LOCAL_STORAGE_KEY)) || [];
        })
    }

    update(todo: Todo) {
        let todos = this.getAll()
            .map(oldTodo => {
                if (oldTodo.id == todo.id) {
                    return todo
                } else {
                    return oldTodo;
                }
            });

        this.storeAll(todos);
    }

    private doInStorage(callback) {
        if (window.sessionStorage) {
            return callback(window.sessionStorage);
        } else {
            console.error('Local storage not supported!');
            return null;
        }
    }
}