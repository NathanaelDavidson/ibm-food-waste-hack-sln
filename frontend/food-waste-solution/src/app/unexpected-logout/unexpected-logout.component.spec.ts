import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnexpectedLogoutComponent } from './unexpected-logout.component';

describe('UnexpectedLogoutComponent', () => {
  let component: UnexpectedLogoutComponent;
  let fixture: ComponentFixture<UnexpectedLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnexpectedLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnexpectedLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
