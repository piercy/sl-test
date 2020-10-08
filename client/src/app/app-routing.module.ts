import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamComponent} from "./team/team.component";
import {TeamsComponent} from "./teams/teams.component";


const routes: Routes = [
  { path: 'team/:teamId', component: TeamComponent },
  { path: '**', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
