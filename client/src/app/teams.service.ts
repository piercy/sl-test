import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import {Team} from "./models/team";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiBaseUrl}/team`);
  }

  get(teamId: any): Observable<Team> {
    return this.http.get<Team>(`${environment.apiBaseUrl}/team/${teamId}`);
  }
}
