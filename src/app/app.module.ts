import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinishedTasksComponent } from './finished-tasks.component';
import { PendingTasksComponent } from './pending-tasks.component';
import { TaskDetailComponent } from './task-detail.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    FinishedTasksComponent,
    PendingTasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})

export class AppModule { }
