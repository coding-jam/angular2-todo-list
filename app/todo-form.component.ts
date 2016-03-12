/**
 * Created by pizzo on 28/02/16.
 */
import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-form',
    template: `
        <form (ngSubmit)="addNewElement()">
          <div class="row">
            <div class="col-sm-8">
                <input ref="todoInput" type="text" class="form-control" id="textInput" placeholder="Add Todo..." [(ngModel)]="element" autocomplete="off"/>
            </div>
            <div class="col-sm-4">
                <input type="submit" class="btn btn-default" value="Save"/>
            </div>
          </div>
        </form>
    `,

})
export class TodoFormComponent {

    @Output() onNewElement: EventEmitter = new EventEmitter<string>();

    private element = '';

    addNewElement() {
        this.onNewElement.emit(this.element);
        this.element = '';
    }
}