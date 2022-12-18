import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCompoComponent } from './nav-bar-compo.component';

describe('NavBarCompoComponent', () => {
  let component: NavBarCompoComponent;
  let fixture: ComponentFixture<NavBarCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
