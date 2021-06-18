import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
  }

}
