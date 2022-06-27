import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddandUpdateComponent } from './addand-update.component';

describe('AddandUpdateComponent', () => {
  let component: AddandUpdateComponent;
  let fixture: ComponentFixture<AddandUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddandUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddandUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
