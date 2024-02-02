import {Component, OnInit} from '@angular/core';
import {TaskListComponent} from "../task-list/task-list.component";
import {TaskService} from "../services/task.service";
import {take} from "rxjs";
import {Task} from "../domain/tasks";
import {NewTaskButtonComponent} from "../new-task-button/new-task-button.component";

@Component({
  selector: 'ti-task-dashboard',
  standalone: true,
  imports: [
    TaskListComponent,
    NewTaskButtonComponent
  ],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss'
})
export class TaskDashboardComponent implements OnInit {
  private tasks!: Task[];
  public overdue: Task[] = [];
  public today: Task[] = [];
  public tomorrow: Task[] = [];
  public thisWeek: Task[] = [];
  public nextWeek: Task[] = [];
  public later: Task[] = [];
  public completed: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().pipe(take(1)).subscribe(
      (tasks) => {
        console.log(tasks);
        this.tasks = tasks;
        //   sort the tasks into the different categories by status and due date
        this.tasks.forEach(task => {
          switch (this.getTaskStatus(task)) {
            case 'Overdue':
              this.overdue.push(task);
              break;
            case 'Today':
              this.today.push(task);
              break;
            case 'Tomorrow':
              this.tomorrow.push(task);
              break;
            case 'This Week':
              this.thisWeek.push(task);
              break;
            case 'Next Week':
              this.nextWeek.push(task);
              break;
            case 'Later':
              this.later.push(task);
              break;
            case 'Completed':
              this.completed.push(task);
              break;
          }
        });
      }
    );
  }

  private getTaskStatus(task: Task): string {
    const dueDate = new Date(task.dueDate);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    if (task.status === 'Completed') {
      return 'Completed';
    } else if (dueDate < today) {
      return 'Overdue';
    } else if (dueDate.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (dueDate.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else if (dueDate < nextWeek) {
      return 'This Week';
    } else if (dueDate >= nextWeek) {
      return 'Next Week';
    } else {
      return 'Later';
    }
  }
}
