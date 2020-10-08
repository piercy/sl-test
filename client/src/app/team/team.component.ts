import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Team} from "../models/team";
import {TeamsService} from "../teams.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  uefaImageUrl: string;
  uefaProfileUrl: string = '';

  // Could allow input and then wouldn't need to make a back-end call if we already have the data (could be useful for on hover or similar)
  //@Input() team: Team = null;
  team: Team = null;
  errorMessage: string;
  error: boolean;
  editMode: boolean;
  private originalTeam: Team;

  constructor(private activatedRoute: ActivatedRoute, private teamService : TeamsService) {
    this.activatedRoute.params.subscribe((params) => {
      if(this.team == null)
      {
        teamService.get(params.teamId).subscribe((res: Team) => {
          this.team = res;

          this.uefaImageUrl = `http://img.uefa.com/imgml/TP/teams/logos/70x70/${this.team.ID}.png`;
          this.uefaProfileUrl = `https://www.uefa.com/teamsandplayers/teams/club=${this.team.ID}/profile/index.html`;

        }, error => {
          this.error = true;
          this.errorMessage = error.error;
        });
      }
    });
  }

  ngOnInit(): void {
  }

  enableEditing() {
    this.editMode = true;
    this.originalTeam = Object.assign({}, this.team);
  }
  disableEditing(cancel: boolean) {
     if(cancel) {
       this.team = Object.assign({}, this.originalTeam);
     }
     this.originalTeam = null;
     this.editMode = false;
  }

  saveTeam() {
    this.teamService.update(this.team).subscribe((res: Team) => {
        this.team = res;
        this.editMode = false;
    }, error => {
      this.error = true;
      this.errorMessage = error.error;
    });
  }
}
