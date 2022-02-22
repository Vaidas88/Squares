import { Component, OnInit } from '@angular/core';
import { Point } from 'src/app/models/point.model';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-insert-points',
  templateUrl: './insert-points.component.html',
  styleUrls: ['./insert-points.component.scss']
})
export class InsertPointsComponent implements OnInit {
  public point: Point = { x:0, y:0 };
  public fileImport?: File;

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
  }

  onInsert(): void{
    this.pointService.insert(this.point);
  }
}
