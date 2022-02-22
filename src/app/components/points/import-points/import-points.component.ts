import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/services/point.service';

@Component({
  selector: 'app-import-points',
  templateUrl: './import-points.component.html',
  styleUrls: ['./import-points.component.scss']
})
export class ImportPointsComponent implements OnInit {
  public file: File | null| undefined = null;

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
  }

  onChange(event: Event){
    let fileInput = event.target as HTMLInputElement;
    this.file = fileInput.files?.item(0);
  }

  onImport(){
    this.pointService.import(this.file);
  }
}
