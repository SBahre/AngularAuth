import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  standalone: false,
  
  templateUrl: './special-events.component.html',
  styleUrl: './special-events.component.scss'
})
export class SpecialEventsComponent implements OnInit {

  specialEvents:any[] = []
    constructor(private _eventService: EventService) { }
  async ngOnInit() {
    try {
      let result = await this._eventService.getEvents();
      this.specialEvents = result
    } catch (error) {
      console.log(error)
    }
  }
}
