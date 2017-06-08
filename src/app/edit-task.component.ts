// EDIT TASK
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { TaskService } from './task.service';

import { Task } from './task';

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {
    task: Task;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }
        
    save(text: string): void {
        text = text.trim();
        if (!text) {return;}
        this.task.text = text;
        this.taskService.updateTask(this.task).then(() => this.goBack());
    }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => 
        this.taskService.getTask(+params['id']))
        .subscribe(task => this.task = task);
    }
}