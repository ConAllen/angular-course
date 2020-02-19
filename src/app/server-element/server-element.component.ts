import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  // serverElements = [{type: 'server', name: 'test server', content: 'test-content'},];
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  // changes when @input elements change
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnIt called');
  }

  ngDoCheck() {

  }
  ngOnDestroy() {
    console.log('ngOn Destory')
  }



}
