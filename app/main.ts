/**
 * Created by pizzo on 28/02/16.
 */
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from "angular2/http";
// Add all operators to Observable
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
