import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




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
      physicalTotalRuntime: '',
      reasonForChange: ''
    };
    submitted = false;

    getOmaxName = (omaxName) => {
      this.log.omaxName = omaxName;
    }




  constructor(private logService: LogsService) {


  }

  ngOnInit(): void {


  }



  saveLog(): void {
    const data = {
      omaxName: this.log.omaxName,
      partChanged: this.log.partChanged,
      operator: this.log.operator,
      currentTotalRuntime: this.log.currentTotalRuntime,
      physicalTotalRuntime: this.log.physicalTotalRuntime,
      reasonForChange: this.log.reasonForChange
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
      physicalTotalRuntime: '',
      reasonForChange: ''

    };
  }

}
