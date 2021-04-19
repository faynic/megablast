import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { DailyReportsService } from '../services/daily-reports.service';
import { OmaxService } from '../services/omax.service';

@Component({
  selector: 'app-daily-report-view',
  templateUrl: './daily-report-view.component.html',
  styleUrls: ['./daily-report-view.component.css']
})
export class DailyReportViewComponent implements OnInit {

  reports$: Observable<any[]>;
  omaxs: Observable<any[]>;

  constructor(private omaxService: OmaxService) { }

  ngOnInit() {

    this.getOmaxs();
  }

  getOmaxs(): void {
    this.omaxService.getAll()
      .subscribe(
        data => {
          this.omaxs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

 

}
