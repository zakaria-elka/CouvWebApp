import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifStepIconComponent } from './verif-step-icon.component';

describe('VerifStepIconComponent', () => {
  let component: VerifStepIconComponent;
  let fixture: ComponentFixture<VerifStepIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifStepIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifStepIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
