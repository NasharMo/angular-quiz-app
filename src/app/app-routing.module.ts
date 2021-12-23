import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailsPath, UsersPath} from "./constants";
import {UserComponent} from "./components/user/user.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [

  { path: UsersPath, component: UsersComponent},
  { path: UserDetailsPath + '/:id', component: UserComponent},
  { path: '', redirectTo: '/' + UsersPath, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
