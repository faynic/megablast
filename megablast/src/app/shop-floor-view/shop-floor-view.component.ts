import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OmaxService } from '../services/omax.service';




@Component({
  selector: 'app-shop-floor-view',
  templateUrl: './shop-floor-view.component.html',
  styleUrls: ['./shop-floor-view.component.css']
})
export class ShopFloorViewComponent implements OnInit {

  omaxs: Observable<any[]>;








  constructor(private omaxService: OmaxService,  private http: HttpClient) {}



  ngOnInit(): void {

    this.listMachines();

    setInterval(() => {

      this.listMachines();
    }, 5000);


  }


  listMachines(): void {
    this.omaxService.getAll()
      .subscribe(
        data => {
          this.omaxs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

