// TASK DETAIL COMPONENT gives a detailed view of a single task
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css'],
})

export class TaskDetailComponent{
    constructor(private router: Router) { }
  
    @Input() task: Task;

    gotoEdit(): void {
        this.router.navigate(['/task', this.task.id]);
    }
}