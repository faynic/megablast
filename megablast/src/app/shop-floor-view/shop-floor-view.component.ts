import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { OmaxService } from '../services/omax.service';

@Component({
  selector: 'app-shop-floor-view',
  templateUrl: './shop-floor-view.component.html',
  styleUrls: ['./shop-floor-view.component.css']
})
export class ShopFloorViewComponent implements OnInit {

  omaxs: Observable<any[]>;



  constructor(private omaxService: OmaxService) { }

  ngOnInit(): void {
    this.listMachines();
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
