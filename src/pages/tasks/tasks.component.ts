import { Component } from '@angular/core';
import { TaskListComponent } from '../../widgets/task-list';
import { TaskComponent } from '../../widgets/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskListComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
