import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: 'app-todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
