import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../shared/models/hero";

@Component({
  selector: 'app-hero-child-component',
  templateUrl: './hero-child-component.component.html',
  styleUrls: ['./hero-child-component.component.css']
})
export class HeroChildComponentComponent implements OnInit {
  private _name;

  constructor() {
  }

  ngOnInit() {
  }

  // declare two properties to receive data from parent component
  @Input() hero: Hero;
  @Input('master') masterName: string;


  //Use an input property setter to intercept and act upon a value from the parent.
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || 'no name setted'!
  }

  get name() {
    return this._name;
  }
}
