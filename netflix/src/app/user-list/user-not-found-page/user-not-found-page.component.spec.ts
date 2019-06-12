import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotFoundPageComponent } from './user-not-found-page.component';

describe('UserNotFoundPageComponent', () => {
  let component: UserNotFoundPageComponent;
  let fixture: ComponentFixture<UserNotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
