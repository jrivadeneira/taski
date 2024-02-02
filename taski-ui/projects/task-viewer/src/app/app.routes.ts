import { Routes } from '@angular/router';
import {TaskDashboardComponent} from "./task-dashboard/task-dashboard.component";
import {TaskEditorComponent} from "./task-editor/task-editor.component";

export const taskRoutes: Routes = [
  { path: '', component: TaskDashboardComponent, pathMatch: 'full'},
  { path: 'task-edit/:taskId', component: TaskEditorComponent },
  { path: 'create-task', component: TaskEditorComponent }
];
