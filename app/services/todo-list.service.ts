/**
 * Created by pizzo on 13/03/16.
 */
import {Injectable} from "@angular/core";
import {Todo} from "../models/todo";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoListService {

    private static baseUrl = '/api';

    constructor(private http: Http) {}

    store(todo: Todo) {
        console.log('Storing' + todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        return this.http.post(TodoListService.baseUrl + '/todos', JSON.stringify(todo), { headers: headers })
            .map(resp => resp.json())
            .catch(res => {
                console.error(res.toString());
                return Observable.throw(res.message || 'Server error')
            });;
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
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.put(TodoListService.baseUrl + '/todos/' + todo.id, JSON.stringify(todo), { headers: headers })
            .catch(res => {
                console.error(res.toString());
                return Observable.throw(res.message || 'Server error')
            });
    }
}