/**
 * Created by pizzo on 28/02/16.
 */
import {Component, OnInit} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {TodoListService} from "./services/todo-list.service";
import {TodosComponent} from "./todos.components";
import {DoneListComponent} from "./done-list.component";

@Component({
    selector: 'todo-list-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <nav style="margin-top: 5em;">
                        <ul class="nav nav-pills nav-stacked">
                          <li role="presentation"><a [routerLink]="['#/todos']">Todos</a></li>
                          <li role="presentation"><a [routerLink]="['#/done']">Done</a></li>
                        </ul>
                    </nav>          
                </div>
                <div class="col-md-10">
    		        <router-outlet></router-outlet>
                </div>
            </div>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        TodoListService
    ]
})
@Routes([{
    path: '#/todos', component: TodosComponent
},{
    path: '#/done', component: DoneListComponent
}])
export class AppComponent implements OnInit {
    public title = 'TodoApp';

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['#/todos']);
    }
}