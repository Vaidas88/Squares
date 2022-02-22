import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Point } from '../models/point.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  public points$: BehaviorSubject<Point[]> = new BehaviorSubject<Point[]>([]);

  private points: Point[] = [];

  constructor(private http: HttpClient) { }

  load(): void{
    this.getAll().subscribe((points) => {
      this.points = points;
      this.points$.next(this.points);
    });
  }

  private getAll(): Observable<Point[]>{
    return this.http.get<Point[]>(`${env.api}/point`);
  }

  public insert(point: Point): void{
    if(this.points.length === 10000){
      return;
    }
    
    this.http.post<Point>(`${env.api}/point`, point).subscribe((point) => {
      this.points.push(point);
      this.points$.next(this.points);
    });
  }

  public import(file: File | null | undefined): void{
    if(!file){
      return;
    }
    
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.http.post<any>(`${env.api}/point/import`, formData).subscribe((res) => {});
  }
}
