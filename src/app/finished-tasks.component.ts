import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    providers: [TaskService],
    selector: 'finished-tasks',
    templateUrl: './finished-tasks.component.html',
    styleUrls: ['./finished-tasks.component.css'],
})

export class FinishedTasksComponent implements OnInit {
    // FINISHED TASKS COMPONENT gives a list of completed tasks
    tasks: Task[];

    ngOnInit(): void { }
}