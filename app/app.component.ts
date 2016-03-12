/**
 * Created by pizzo on 28/02/16.
 */
import {Component} from "angular2/core";
import {TodoFormComponent} from "./todo-form.component";
import {TodoListComponent} from "./todo-list.component";
import {Todo} from "./models/todo";

@Component({
    selector: 'todo-list-app',
    template: `
        <div class="container">
    		<h1 class="text-center">{{title}}</h1>
            <todo-form (onNewElement)="addNewElement($event)"></todo-form>
            <hr/>
    		<todo-list [todos]="todoList"></todo-list>
    	</div>
    `,
    directives: [
        TodoFormComponent,
        TodoListComponent
    ]
})
export class AppComponent {

    public title = 'TodoApp';

    public todoList: Todo[] = [];

    addNewElement(element: string) {
        this.todoList.push({text: element});
    }
}