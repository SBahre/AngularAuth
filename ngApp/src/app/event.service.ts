import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    let result =  this.http.get<any>(this._eventsUrl)
    return lastValueFrom(result);
  }

  getSpecialEvents() {
    let result =  this.http.get<any>(this._specialEventsUrl)
    return lastValueFrom(result);
  }
}
