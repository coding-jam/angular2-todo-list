/**
 * Created by pizzo on 28/02/16.
 */
import {Component} from "@angular/core";
import {TodoFormComponent} from "./todo-form.component";
import {TodoListComponent} from "./todo-list.component";
import {Todo} from "./models/todo";
import {TodoListService} from "./services/todo-list.service";

@Component({
    selector: 'todos',
    template: `
        <div class="row">
    		<h1 class="text-center">{{title}}</h1>
            <todo-form (onNewElement)="addNewElement($event)"></todo-form>
            <hr/>
    		<todo-list [todos]="todoList"></todo-list>
    	</div>
    `,
    directives: [
        TodoFormComponent,
        TodoListComponent
    ],
})
export class TodosComponent {

    public title = 'TodoApp';

    public todoList: Todo[] = [];

    constructor(private _todoListService: TodoListService) {}

    addNewElement(element: string) {
        let todo = {id: this.todoList.length + 1, text: element, done: false};
        this._todoListService.store(todo)
            .subscribe(todo => this.todoList.push(todo), alert);
    }
}