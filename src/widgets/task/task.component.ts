import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {
  TuiInputModule,
  TuiFieldErrorPipeModule
} from '@taiga-ui/kit';
import {
  TuiErrorModule,
  TuiTextfieldControllerModule,
  TuiHintModule,
  TuiButtonModule
} from '@taiga-ui/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs';

import { TaskInterface } from '../../entities/taskInterface';
import { Task } from '../../entities/taskModel';
import { TasksService } from '../../features';
import { FormStateService } from '../../features';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    TuiInputModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
    TuiHintModule,
    TuiFieldErrorPipeModule,
    TuiButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss', './task.component.less'],
})
export class TaskComponent implements OnInit, OnDestroy {

  isFormOpen: boolean = false;
  private subscription!: Subscription;

  constructor(
    private TasksService: TasksService,
    private FormStateService: FormStateService
  ) {
  }

  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescr: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.subscription = this.FormStateService.formState$.subscribe(state => {
      this.isFormOpen = state;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeForm(): void {
    this.FormStateService.closeForm();
  }

  addTask() {
    if (this.taskForm.valid) {
      const taskName = this.taskForm.get('taskName')!.value!;
      const taskDescr = this.taskForm.get('taskDescr')!.value!;
      const newTask: TaskInterface = new Task(taskName, taskDescr);

      this.TasksService.addTask(newTask).pipe(
        switchMap(() => this.TasksService.getTasks())
      ).subscribe();

      this.cancel();
    }
  }

  cancel() {
    this.taskForm.reset();
    this.closeForm()
  }

}
