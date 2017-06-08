// ADD TASK COMPONENT for adding a new task
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';

import { TaskService } from './task.service';

@Component({
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css'],
})

export class AddTaskComponent{
    constructor(
        private router: Router,
        private taskService: TaskService
    ) { }

    add(text: string, note: string): void {
    text = text.trim();
    note = note.trim();
    if (!name) { return; }
    this.taskService.createTask(text);
    }
}