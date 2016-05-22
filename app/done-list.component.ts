import {Component, OnInit, OnDestroy} from "@angular/core";
import {OnActivate, CanDeactivate, RouteTree, RouteSegment} from "@angular/router";
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
export class DoneListComponent implements OnActivate, CanDeactivate, OnInit, OnDestroy {
    title:string = 'Done List';
    todos: Todo[] = [];
    constructor(private _todoListService: TodoListService) {}
    ngOnInit() {
        console.log('Init ' + this.title);
    }

    ngOnDestroy() {
        console.log('Destroy ' + this.title);
    }

    routerOnActivate(curr: RouteSegment):void {
        console.log('Entering view ' + this.title);
        this._todoListService.getAll()
            .flatMap((todos:Todo[]) => Observable.from(todos))
            .filter((todo: Todo) => todo.done)
            .subscribe(
                (todo: Todo) => this.todos.push(todo),
                (error: string) => alert(error));
    }

    routerCanDeactivate(currTree?:RouteTree, futureTree?:RouteTree):Promise<boolean> {
        console.log('Leaving view ' + this.title);
        return Promise.resolve(true);
    }
}