import { Component, OnInit } from '@angular/core';
import { Part } from '../models/part';
import { PartsService } from '../services/parts.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-machine-parts',
  templateUrl: './machine-parts.component.html',
  styleUrls: ['./machine-parts.component.css']
})
export class MachinePartsComponent implements OnInit {

  parts: Part[] = [];
  part: any = [];

  getPart() {
    this.partsService.getAll()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.part.push({
            id: d.id,
            supplierPartName: d.supplierPartName,
          });
        }
        console.log(this.part);
      });
  }


  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.getPart();
  }

}
