import {Component, Input} from '@angular/core';
import {Task} from "../domain/tasks";
import {CommonModule} from "@angular/common";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'ti-task-status-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-status-indicator.component.html',
  styleUrl: './task-status-indicator.component.scss'
})
export class TaskStatusIndicatorComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {
  }

  public incrementStatus() {
    console.log(this.task.status);
    if (this.task.status === 'Not Started' || !this.task.status) {
      this.task.status = 'In Progress';
    } else if (this.task.status === 'In Progress') {
      this.task.status = 'Completed';
    } else if (this.task.status === 'Completed') {
      this.task.status = 'Not Started';
    }
    this.taskService.updateTask(this.task);
  }
}
