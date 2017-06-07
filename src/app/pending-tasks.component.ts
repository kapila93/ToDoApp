import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    providers: [TaskService],
    selector: 'pending-tasks',
    templateUrl: './pending-tasks.component.html',
    styleUrls: ['./pending-tasks.component.css'],
})

export class PendingTasksComponent implements OnInit {
    // PENDING TASKS COMPONENT gives a list of pending tasks
    tasks: Task[];

    ngOnInit(): void { }
}