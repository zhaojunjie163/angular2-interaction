import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HEROES} from "../shared/models/hero";
import {CountdownViewChildParentComponentComponent} from "../countdown-view-child-parent-component/countdown-view-child-parent-component.component";
import {CountdownTimerComponent} from "../countdown-timer-component/countdown-timer-component.component";

@Component({
  selector: 'app-hero-parent-component',
  templateUrl: './hero-parent-component.component.html',
  styleUrls: ['./hero-parent-component.component.css']
})
export class HeroParentComponentComponent implements OnInit, AfterViewInit {

  major: number = 1;
  minor: number = 23;

  constructor() {
  }

  ngOnInit() {
  }

  heroes = HEROES;
  master: string = 'Master';

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }


  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agree: boolean) {
    agree ? this.agreed++ : this.disagreed++;
  }


  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit(): void {

    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
