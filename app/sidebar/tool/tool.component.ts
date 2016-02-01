import {Component} from 'angular2/core';
import {Tool} from './tool';

@Component({
    selector: 'tool',
    templateUrl: 'app/sidebar/tool/tool.html',
    styleUrls: ['app/sidebar/tool/tool.css'],
    inputs: ['tool', 'selected']
})
export class ToolComponent {
    public tool: Tool;

    public selected: boolean;

    getIconClass() {
        return 'fa fa-' + this.tool.icon;
    }
}