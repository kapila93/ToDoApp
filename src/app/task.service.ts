// TASK SERVICE is responsible for retreiving task data as well as performing CRUD operations
import { Injectable } from '@angular/core';
import { Task } from './task';

import { TASKS } from './mock-data';

@Injectable()
export class TaskService {
    
    task: Task;

    getTask(id: number): Promise<Task> {
        return Promise.resolve(TASKS.find(task => task.id === id));
    }

    getTasks(done?: boolean): Promise<Task[]> {
        if (done != null) {
            return Promise.resolve(TASKS.filter(task => task.done !== done));
        }
        else
            return Promise.resolve(TASKS);
    }

    createTask(text: string): Promise<Task> {
        
        return;
    }

    // used to mark a function as done or not done
    finishTask(id: number, done: boolean): Promise<Task> {
        this.task = TASKS.find(task => task.id === id);
        this.task.done = done;
        return Promise.resolve(this.task);
    }

    deleteTask(id: number): Promise<Task> {
        this.task = TASKS.find(task => task.id === id);
        return Promise.resolve(TASKS.find(task => task.id === id));
    }

    updateTask(task: Task): Promise<Task> {
        this.task = TASKS.find(t => t.id === task.id);
        this.task.text = task.text;
        this.task.note = task.note;
        return Promise.resolve(this.task);
    }
}
