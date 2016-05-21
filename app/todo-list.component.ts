/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "./models/todo";
import {TodoListService} from "./services/todo-list.service";

@Component({
    selector: 'todo-list',
    template: `
        <div class="col-xs-12">
            <table class="table">
                <tr *ngFor="let todo of todos">
                    <td [class.done-true]="todo.done">{{todo.id}}</td>
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
export class TodoListComponent implements OnInit {

    @Input() todos: Todo[];

    constructor(private _todoListService: TodoListService) {}

    ngOnInit():any {
        this._todoListService.getAll().subscribe(
            (todos: Todo[]) => {
                todos.forEach(todo => this.todos.push(todo));
            },
            (error: string) => alert(error));
    }


    markDone(todo: Todo) {
        todo.done = true;
        this.mark(todo);
    }

    markUndone(todo: Todo) {
        todo.done = false;
        this.mark(todo);
    }

    private mark(todo: Todo) {
        this._todoListService.update(todo)
            .subscribe(null, alert);
    }

}