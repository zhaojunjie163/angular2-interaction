import {Component, OnInit} from '@angular/core';
import {HEROES} from "../shared/models/hero";

@Component({
  selector: 'app-hero-parent-component',
  templateUrl: './hero-parent-component.component.html',
  styleUrls: ['./hero-parent-component.component.css']
})
export class HeroParentComponentComponent implements OnInit {
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
  onVoted(agree: boolean){
    agree? this.agreed ++ : this.disagreed++;
  }

}
