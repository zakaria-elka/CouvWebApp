import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSearchComponent } from './drive-search.component';

describe('DriveSearchComponent', () => {
  let component: DriveSearchComponent;
  let fixture: ComponentFixture<DriveSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
