import {Component, Input, OnInit, signal} from '@angular/core';
import {TaskService} from "../services/task.service";
import {CreateTaskRequest, Task} from "../domain/tasks";
import {take} from "rxjs";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-task-editor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-editor.component.html',
  styleUrl: './task-editor.component.scss'
})
export class TaskEditorComponent implements OnInit {

  @Input() private taskId!: string;
  private task: Task | undefined;
  public title = signal<string>("");
  public createdBy = signal<string>("");
  public assignedTo = signal<string>("");
  public description = signal<string>("");
  public status = signal<string>("");
  public createdDate = signal<string>(new Date().toISOString());
  public dueDate = signal<string>(new Date().toDateString());
  public category = signal<string>("");
  public archived = signal<boolean>(false);


  statusOptions: string[] = ['Not Started', 'In Progress', 'Completed'];
  categoryOptions: string[] = ['Work', 'Personal', 'Other'];
  members: string[] = ['Jack', 'Kluszka', 'Frijolita', 'Mom'];
  constructor(
    private taskService: TaskService,
    private router: Router
  ) {
  }

  public ngOnInit() {
    // if a task id is passed, get the task from the task service
    console.log(this.taskId)

    if (this.taskId) {
      this.taskService.getTask(this.taskId).pipe(take(1)).subscribe(
        (task: Task) => {
          this.task = task;
          this.title.set(task.title);
          this.createdBy.set(task.createdBy);
          this.assignedTo.set(task.assignedTo);
          this.description.set(task.description);
          this.status.set(task.status);
          this.createdDate.set(task.createdDate);
          this.dueDate.set(task.dueDate);
          this.category.set(task.category);
          this.archived.set(task.archived);
        }
      );
    }
  }

  public saveTask() {
    let task = this.task;
    // update the task with the signal values if it already exists
    if (task) {
      task.title = this.title();
      task.createdBy = this.createdBy();
      task.assignedTo = this.assignedTo();
      task.description = this.description();
      task.status = this.status();
      task.createdDate = this.createdDate();
      task.dueDate = this.dueDate();
      task.category = this.category();
      task.archived = this.archived();
      this.taskService.updateTask(task);
      this.router.navigate(['']);
      return;
    }
    // create task request with signal values if one wasn't already passed
    let createTaskRequest: CreateTaskRequest = new CreateTaskRequest(
      this.title(),
      this.createdBy(),
      this.assignedTo(),
      this.description(),
      this.status(),
      this.createdDate(),
      this.dueDate(),
      this.category(),
      this.archived()
    );
    this.taskService.createTask(createTaskRequest);
    this.router.navigate(['']);
  }

  public cancel() {
    this.router.navigate(['']);
  }
}
