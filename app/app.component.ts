import {Component} from 'angular2/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SessionFilesComponent} from "./session-files/session-files.component";

@Component({
    selector: 'whiteboard-app',
    directives: [SidebarComponent, SessionFilesComponent],
    templateUrl: 'app/app.html',
    styles: [`
    .main-content {
        background: #fff;
        height: 100%;
    }`]
})
export class AppComponent {
    public title = 'Tour of Heroes';
}