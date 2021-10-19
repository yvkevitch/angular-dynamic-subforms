import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDrugComponent } from './one-drug.component';

describe('OneDrugComponent', () => {
  let component: OneDrugComponent;
  let fixture: ComponentFixture<OneDrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
