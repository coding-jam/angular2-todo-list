/**
 * Created by pizzo on 13/03/16.
 */
import {Injectable} from "angular2/core";
import {Todo} from "../models/todo";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoListService {

    private static baseUrl = '/api';

    constructor(private http: Http) {}

    store(todo: Todo) {
        console.log('Storing' + todo);
    }

    getAll() {
        return this.http.get(TodoListService.baseUrl + '/todos')
            .map(res => res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(res => {
                console.error(res.toString());
                return Observable.throw(res.message || 'Server error')
            });
    }

    update(todo: Todo) {
        console.log('Update');
    }
}