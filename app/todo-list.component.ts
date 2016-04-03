/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Input} from "angular2/core";
import {Todo} from "./models/todo";
import {TodoListService} from "./services/todo-list.service";

@Component({
    selector: 'todo-list',
    template: `
        <div class="row">
            <table class="table">
                <tr *ngFor="#todo of todos">
                    <td [class.done-true]="todo.done">{{todo.text}}</td>
                    <td>
                        <button class="pull-right btn btn-default" (click)="markDone(todo)" *ngIf="!todo.done">
                            Done
                        </button>
                        <button class="pull-right btn btn-default" (click)="markUndone(todo)" *ngIf="todo.done">
                            Redo
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    `,
    styles: [`
        .done-true {
          text-decoration: line-through;
          color: #CCC;
        }`
    ]
})
export class TodoListComponent {

    public todos: Todo[];

    constructor(private _todoListService: TodoListService) {
        this.todos = this._todoListService.getAll();
        this._todoListService.onStore()
            .subscribe((todo: Todo) => {
                this.todos.push(todo);
            });
    }

    markDone(todo: Todo) {
        todo.done = true;
        this._todoListService.update(todo);
    }

    markUndone(todo: Todo) {
        todo.done = false;
        this._todoListService.update(todo);
    }

}