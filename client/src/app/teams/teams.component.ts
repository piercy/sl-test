import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Team} from "../models/team";
import {TeamsService} from "../teams.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  updateSuccess: boolean;
  updateTeamName: string;


  constructor(private teamService: TeamsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.updateSuccess = this.route.snapshot.paramMap.get("Updated") == 'true';
    this.updateTeamName = this.route.snapshot.paramMap.get("Name");
    this.getTeams();
  }
  getTeams() {
    this.teamService.getAll().subscribe((res: Team[]) => {
      this.teams = res;
    });
  }

}
