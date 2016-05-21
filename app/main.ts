/**
 * Created by pizzo on 28/02/16.
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from "@angular/http";
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Add all operators to Observable
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
