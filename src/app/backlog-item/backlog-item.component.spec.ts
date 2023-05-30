import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogItemComponent } from './backlog-item.component';

describe('BacklogItemComponent', () => {
  let component: BacklogItemComponent;
  let fixture: ComponentFixture<BacklogItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacklogItemComponent]
    });
    fixture = TestBed.createComponent(BacklogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
