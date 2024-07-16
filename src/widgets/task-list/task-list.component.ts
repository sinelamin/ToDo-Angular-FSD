import { Component, OnInit } from '@angular/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiRootModule, TuiSvgModule } from '@taiga-ui/core';
import { NgClass } from '@angular/common';

import { TaskInterface } from '../../entities/taskInterface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TuiTableModule,
    TuiTagModule,
    TuiLetModule,
    TuiButtonModule,
    TuiRootModule,
    TuiSvgModule,
    NgClass
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss', './task-list.component.less'],
})
export class TaskListComponent implements OnInit {

  
  // tasks: TaskInterface[] = [];

  tasks: TaskInterface[] = [
    {
      task: "Сделать домашнее задание",
      description: "Завершить раздел по типам данных",
      status: false,
      id: 1
    },
    {
      task: "Купить продукты",
      description: "Купить молоко, хлеб и яйца",
      status: true,
      id: 2
    },
    {
      task: "Прочитать книгу",
      description: "Закончить читать 'Войну и мир'",
      status: false,
      id: 3
    },
    {
      task: "Убрать в квартире",
      description: "Сделать генеральную уборку",
      status: true,
      id: 4
    }
  ];
  

  readonly columns = ['number', 'task', 'id', 'status', 'actions'];

  ngOnInit(): void {
    
  }

  openForm() {
  }

  deleteTask() {
  }

}
