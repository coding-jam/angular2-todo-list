/**
 * Created by pizzo on 28/02/16.
 */
import {Component} from "angular2/core";
import {TodoFormComponent} from "./todo-form.component";
import {TodoListComponent} from "./todo-list.component";
import {Todo} from "./models/todo";
import {TodoListService} from "./services/todo-list.service";

@Component({
    selector: 'todo-list-app',
    template: `
        <div class="container">
    		<h1 class="text-center">{{title}}</h1>
            <todo-form></todo-form>
            <hr/>
    		<todo-list></todo-list>
    	</div>
    `,
    directives: [
        TodoFormComponent,
        TodoListComponent
    ],
    providers: [
        TodoListService
    ]
})
export class AppComponent {

    public title = 'TodoApp';

}