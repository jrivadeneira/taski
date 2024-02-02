import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../domain/tasks";
import {CommonModule} from "@angular/common";
import {TaskStatusIndicatorComponent} from "../task-status-indicator/task-status-indicator.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ti-task-list',
  standalone: true,
  imports: [CommonModule, TaskStatusIndicatorComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Input() color!: string;
  @Input() title!: string;

  constructor() {
  }
}
