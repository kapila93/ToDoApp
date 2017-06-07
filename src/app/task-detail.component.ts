import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    providers: [TaskService],
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css'],
})

export class TaskDetailComponent implements OnInit {
    // TASK DETAIL COMPONENT gives a detailed view of a single task
    tasks: Task[];

    ngOnInit(): void { }
}