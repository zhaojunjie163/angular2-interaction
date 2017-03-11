import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-voter-component',
  templateUrl: './voter-component.component.html',
  styleUrls: ['./voter-component.component.css']
})
export class VoterComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //The child component exposes an EventEmitter property with which it emits events when something happens.
  @Output() onVoted: EventEmitter<boolean> = new EventEmitter<boolean>();
  // to receive data from parent
  @Input() name: string;

  _voted = false;

  vote(agree: boolean) {
    this.onVoted.emit(agree);
    this._voted = true;
  }
}
