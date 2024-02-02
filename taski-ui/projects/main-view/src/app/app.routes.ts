import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'task-viewer'
  },
  {
    path: 'task-viewer', loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes'
      }).then(m => m.taskRoutes)
  },


  // {
  //   path: 'task-viewer',
  //   // loadChildreas instead of loadComponent !!!
  //   loadChildren: () =>
  //     loadRemoteModule('taskViewer', './routes').then((m) => m.routes),
  // },
];
