import {Component} from "@angular/core";
import {OnActivate, RouteSegment} from "@angular/router";
import {Todo} from "./models/todo";
import {TodoListService} from "./services/todo-list.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'todo-list',
    template: `
        <div class="row">
    		<h1 class="text-center">{{title}}</h1>
            <table class="table">
                <tr *ngFor="let todo of todos">
                    <td>{{todo.id}}</td>
                    <td>{{todo.text}}</td>
                </tr>
            </table>
    	</div>
    `
})
export class DoneListComponent implements OnActivate {
    title:string = 'Done List';

    todos: Todo[] = [];

    constructor(private _todoListService: TodoListService) {}

    routerOnActivate(curr: RouteSegment):void {
        this._todoListService.getAll()
            .flatMap((todos:Todo[]) => Observable.from(todos))
            .filter((todo: Todo) => todo.done)
            .subscribe(
                (todo: Todo) => this.todos.push(todo),
                (error: string) => alert(error));
    }
}