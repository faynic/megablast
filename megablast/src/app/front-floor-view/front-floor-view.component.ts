import { Component, OnInit } from '@angular/core';
import { OMAXS } from '../omaxs';


@Component({
  selector: 'app-front-floor-view',
  templateUrl: './front-floor-view.component.html',
  styleUrls: ['./front-floor-view.component.css']
})
export class FrontFloorViewComponent implements OnInit {

  omaxs = OMAXS;

  constructor() { }

  ngOnInit() {
  }

}
