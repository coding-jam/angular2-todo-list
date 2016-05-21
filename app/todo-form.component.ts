/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Output, EventEmitter} from "@angular/core";

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

    @Output() onNewElement: EventEmitter<string> = new EventEmitter<string>();

    private element = '';

    addTodo() {
        this.onNewElement.emit(this.element);
        this.element = '';
    }
}