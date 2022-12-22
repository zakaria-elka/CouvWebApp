import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatioNbarComponent } from './verificatio-nbar.component';

describe('VerificatioNbarComponent', () => {
  let component: VerificatioNbarComponent;
  let fixture: ComponentFixture<VerificatioNbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificatioNbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificatioNbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
