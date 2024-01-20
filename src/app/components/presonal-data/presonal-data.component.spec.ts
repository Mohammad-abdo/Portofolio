import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalDataComponent } from './presonal-data.component';

describe('PresonalDataComponent', () => {
  let component: PresonalDataComponent;
  let fixture: ComponentFixture<PresonalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresonalDataComponent]
    });
    fixture = TestBed.createComponent(PresonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
