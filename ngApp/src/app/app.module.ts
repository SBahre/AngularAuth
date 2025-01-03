import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { EventService } from './event.service';
import { tokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    RegisterComponent,
    SpecialEventsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [
    AuthService,
    EventService,
    provideHttpClient(withInterceptors([tokenInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
