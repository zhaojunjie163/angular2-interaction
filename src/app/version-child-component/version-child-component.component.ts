import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-version-child-component',
  templateUrl: './version-child-component.component.html',
  styleUrls: ['./version-child-component.component.css']
})
export class VersionChildComponentComponent implements OnChanges {

  constructor() {
  }

  ngOnInit() {
  }

  changeLogs: string[] = [];

  @Input() major: number;
  @Input() minor: number;

//Intercept input property changes with ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLogs.push(log.join(', '));
  }
}
