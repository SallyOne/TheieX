import {Component} from 'angular2/core';
import {headerComponent} from './header';
import {contentComponent} from './content';
@Component({
    selector: 'my-app',
    templateUrl: './app/global/view/global.html',
    styleUrls: ['./app/global/styles/global.css'],
    directives: [headerComponent, contentComponent]
})
export class globalComponent{}
