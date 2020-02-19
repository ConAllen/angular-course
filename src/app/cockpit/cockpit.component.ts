import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ bluePrintName: string, bluePrintContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  // @ViewChild('...', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput) {
    this.blueprintCreated.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: contentInput.value
    });
  }
}
