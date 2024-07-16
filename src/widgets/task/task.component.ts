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
  // isFormOpen: boolean = true;

  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescr: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  closeForm(): void {
  }

  addTask() {
    if (this.taskForm.valid) {
    }
  }

  cancel() {
  }

}
