import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataErpComponent } from './data-erp.component';

describe('DataErpComponent', () => {
  let component: DataErpComponent;
  let fixture: ComponentFixture<DataErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataErpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
