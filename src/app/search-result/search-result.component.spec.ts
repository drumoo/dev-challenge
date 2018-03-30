import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachResultComponent } from './search-result.component';

describe('SeachResultComponent', () => {
  let component: SeachResultComponent;
  let fixture: ComponentFixture<SeachResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
