import { Component, OnInit } from '@angular/core';
import { Omax } from '../models/omax';

@Component({
  selector: 'app-maintenance-form-view',
  templateUrl: './maintenance-form-view.component.html',
  styleUrls: ['./maintenance-form-view.component.css']
})
export class MaintenanceFormViewComponent implements OnInit {

  reasonsForMaintenance = [
    'Broken part',
    'Timer said to change it'

  ];

  constructor() { }

  ngOnInit() {
  }

}
