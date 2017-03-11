import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponentComponent } from './hero-child-component/hero-child-component.component';
import { HeroParentComponentComponent } from './hero-parent-component/hero-parent-component.component';
import { VersionChildComponentComponent } from './version-child-component/version-child-component.component';
import { VoterComponentComponent } from './voter-component/voter-component.component';
import {
  CountdownTimerComponent
} from './countdown-timer-component/countdown-timer-component.component';
import { CountdownViewChildParentComponentComponent } from './countdown-view-child-parent-component/countdown-view-child-parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponentComponent,
    HeroParentComponentComponent,
    VersionChildComponentComponent,
    VoterComponentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
