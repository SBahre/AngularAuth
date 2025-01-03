import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  standalone: false,

  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss',
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: any[] = [];
  constructor(private _eventService: EventService, private router: Router) {}

  async ngOnInit() {
    try {
      let result = await this._eventService.getEvents();
      this.specialEvents = result;
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          console.log('Unauthorized request');
          this.router.navigate(['/login']);
        }
      }
    }
  }
}
