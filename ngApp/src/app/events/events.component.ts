import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  standalone: false,
  
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events :any[]= []
  constructor(private _eventService: EventService) { }

  async ngOnInit() {
    try {
      let result = await this._eventService.getEvents();
      this.events = result
    } catch (error) {
      console.log(error)
    }
  }
}
