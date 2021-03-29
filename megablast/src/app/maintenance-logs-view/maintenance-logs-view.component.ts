import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogsService } from '../services/logs.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-maintenance-logs-view',
  templateUrl: './maintenance-logs-view.component.html',
  styleUrls: ['./maintenance-logs-view.component.css']
})
export class MaintenanceLogsViewComponent implements OnInit {

  logs$: Observable<any[]>;
  currentLog = null;
  currentIndex = -1;
  omaxName = '';

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.retrieveLogs();
  }

  retrieveLogs(): void {
    this.logsService.getAll()
      .subscribe(
        data => {
          this.logs$ = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveLogs();
    this.currentLog = null;
    this.currentIndex = -1;
  }

  setActiveLog(log, index): void {
    this.currentLog = log;
    this.currentIndex = index;
  }

  removeAllLogs(): void {
    this.logsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveLogs();
        },
        error => {
          console.log(error);
        });
  }


  searchMachine(): void {
    this.logsService.findByMachineName(this.omaxName)
      .subscribe(
        data => {
          this.logs$ = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
