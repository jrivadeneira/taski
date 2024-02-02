import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTaskRequest, Task} from "../domain/tasks";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<Task[]>('http://localhost:8080/t/tasks');
  }

  getTask(id: string) {
    return this.http.get<Task>('http://localhost:8080/t/task/' + id);
  }

  updateTask(task: Task) {
    this.http.post<Task>('http://localhost:8080/t/update-task', task).pipe(take(1)).subscribe(
      (task: Task) => {
        console.log('Task updated');
        console.log(task);
      }
    );
  }

  createTask(task: CreateTaskRequest) {
    this.http.post<CreateTaskRequest>('http://localhost:8080/t/create-task', task).pipe(take(1)).subscribe(
      (task: CreateTaskRequest) => {
        console.log('Task created');
        console.log(task);
      }
    );
  }
}
