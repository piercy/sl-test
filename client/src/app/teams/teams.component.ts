import { Component, OnInit } from '@angular/core';
import {Team} from "../models/team";
import {TeamsService} from "../teams.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    this.getTeams();
  }
  getTeams() {
    this.teamService.getAll().subscribe((res: Team[]) => {
      this.teams = res;
    });
  }

}
