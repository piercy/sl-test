import {Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../models/team";
import {TeamsService} from "../teams.service";
import {CountryService} from "../country.service";
import {Country} from "../models/country";

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
  countries: Country[] = [];
  errorMessage: string;
  error: boolean;
  editMode: boolean;
  private originalTeam: Team;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private teamService : TeamsService, private countryService: CountryService) {
    this.activatedRoute.params.subscribe((params) => {
      if(this.team == null) {
        teamService.get(params.teamId).subscribe((res: Team) => {
          this.team = res;

          this.uefaImageUrl = `http://img.uefa.com/imgml/TP/teams/logos/70x70/${this.team.ID}.png`;
          this.uefaProfileUrl = `https://www.uefa.com/teamsandplayers/teams/club=${this.team.ID}/profile/index.html`;

        }, error => {
          this.error = true;
          this.errorMessage = error.error;
        });
      }
      if(this.countries.length === 0) {

        countryService.getAll().subscribe((res: Country[]) => {
          this.countries = res;
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
        // this confirmation would probably be better as some kind of toast notification
        this.router.navigate(['/teams', {Updated: true, Name: this.team.Name}]);
    }, error => {
      this.error = true;
      this.errorMessage = error.error;
    });
  }

  trackByFn(index) {
    return index;
  }
}
