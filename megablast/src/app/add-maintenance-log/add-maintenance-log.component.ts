import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';



@Component({
  selector: 'app-add-maintenance-log',
  templateUrl: './add-maintenance-log.component.html',
  styleUrls: ['./add-maintenance-log.component.css']
})
export class AddMaintenanceLogComponent implements OnInit {
    log = {
      omaxName: '',
      partChanged: '',
      operator: '',
      currentTotalRuntime: '',
      physicalTotalRuntime: ''
    };
    submitted = false;

  constructor(private logService: LogsService) {}

  ngOnInit(): void {

  }


  saveLog(): void {
    const data = {
      omaxName: this.log.omaxName,
      partChanged: this.log.partChanged,
      operator: this.log.operator,
      currentRuntime: this.log.currentTotalRuntime,
      physicalRuntime: this.log.physicalTotalRuntime
    };

    this.logService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;

        },
        error => {
          console.log(error);
        });
  }

  newLog(): void {
    this.submitted = false;
    this.log = {
      omaxName: '',
      partChanged: '',
      operator: '',
      currentTotalRuntime: '',
      physicalTotalRuntime: ''

    };
  }

}
