import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPointsComponent } from './import-points.component';

describe('ImportPointsComponent', () => {
  let component: ImportPointsComponent;
  let fixture: ComponentFixture<ImportPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
