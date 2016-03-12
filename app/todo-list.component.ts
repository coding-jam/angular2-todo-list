/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Input} from "angular2/core";
import {Todo} from "./models/todo";

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
    ],
})
export class TodoListComponent {

    @Input() todos: Todo[];

    markDone(todo: Todo) {
        todo.done = true;
    }

}