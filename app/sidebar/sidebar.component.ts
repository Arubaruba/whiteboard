import {Component} from 'angular2/core';
import {ToolComponent} from "./tool/tool.component";
import {Tool} from './tool/tool';
import {TOOLS} from './tool/tools';

@Component({
    selector: 'sidebar',
    directives: [ToolComponent],
    templateUrl: 'app/sidebar/sidebar.html',
    styleUrls: ['app/sidebar/sidebar.css']
})
export class SidebarComponent {
    public selectedTool:Tool;

    public tools:Tool[] = TOOLS;

    constructor() {
        this.selectToolComponent(this.tools[0]);
    }

    selectToolComponent(tool:Tool) {
        this.selectedTool = tool;
    }
}