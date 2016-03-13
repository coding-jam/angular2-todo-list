/**
 * Created by pizzo on 13/03/16.
 */
import {Injectable} from "angular2/core";
import {Todo} from "../models/todo";

@Injectable()
export class TodoListService {

    private static LOCAL_STORAGE_KEY = "todoList";

    store(todo: Todo) {
        let todos: Todo[] = this.getAll();
        todos.push(todo);

        this.storeAll(todos);
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