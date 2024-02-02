import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ti-new-task-button',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './new-task-button.component.html',
  styleUrl: './new-task-button.component.scss'
})
export class NewTaskButtonComponent {

}
