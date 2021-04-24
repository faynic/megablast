import { Component, OnInit } from '@angular/core';
import { OmaxService } from '../services/omax.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shift-reports',
  templateUrl: './shift-reports.component.html',
  styleUrls: ['./shift-reports.component.css']
})
export class ShiftReportsComponent implements OnInit {

  omaxs: [];
  shift: '';

  constructor(private omaxService: OmaxService) { }

  ngOnInit() {

    this.getOmaxs();

    setInterval(() => {

      this.getOmaxs();
    }, 90000);

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
