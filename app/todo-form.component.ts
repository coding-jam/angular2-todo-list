/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Output, EventEmitter} from "angular2/core";
import {TodoListService} from "./services/todo-list.service";

@Component({
    selector: 'todo-form',
    template: `
        <form (ngSubmit)="addTodo()">
          <div class="row">
            <div class="col-xs-10">
                <input ref="todoInput" type="text" class="form-control" id="textInput" placeholder="Add Todo..." [(ngModel)]="element" autocomplete="off"/>
            </div>
            <div class="col-xs-2">
                <input type="submit" class="btn btn-default" value="Save"/>
            </div>
          </div>
        </form>
    `,
})
export class TodoFormComponent {

    public element = '';

    constructor(private _todoListService: TodoListService) {}

    addTodo() {
        this._todoListService.store({id: null, text: this.element, done: false});
        this.element = '';
    }
}