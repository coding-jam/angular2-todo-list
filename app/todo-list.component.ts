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
                    <td>{{todo.text}}</td>
                </tr>
            </table>
        </div>
    `,

})
export class TodoListComponent {

    @Input() todos: Todo[];



}