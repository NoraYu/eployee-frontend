import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkdaysComponent } from './add-workdays.component';

describe('AddWorkdaysComponent', () => {
  let component: AddWorkdaysComponent;
  let fixture: ComponentFixture<AddWorkdaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkdaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
