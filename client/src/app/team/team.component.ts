import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Team} from "../models/team";
import {TeamsService} from "../teams.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team = null;
  errorMessage: string;
  error: boolean;

  constructor(private activatedRoute: ActivatedRoute, private teamService : TeamsService) {
    this.activatedRoute.params.subscribe((params) => {
      if(this.team == null)
      {
        teamService.get(params.teamId).subscribe((res: Team) => {
          this.team = res;
        }, error => {
          this.error = true;
          this.errorMessage = error.error;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
