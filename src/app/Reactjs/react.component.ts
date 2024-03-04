import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
})

export class ReactComponent implements OnInit {

  reactjs:any;

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { this.viewportScroller.scrollToAnchor(elementId); }
  ngOnInit() {
    this.reactjs  = [
        {
            title:"Component & Component Instance & Elements",
            description:``
        },
        {
            title:"How Rendering works",
            description:``
        },
        {
            title:"Rendering Phase of react",
            description:``
        },
        {
            title:"The Commit phase of react",
            description:``
        },
        {
            title:"Diffing algoritham works && rules of diffing algoritham works",
            description:``
        },
        {
            title:"State update batching & how t",
            description:``
        },
        {
            title:"How event works in react ",
            description:``
        },
        {
            title:"Abort Controller in js  ",
            description:``
        },

    ]
  }


}