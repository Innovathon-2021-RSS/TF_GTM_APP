import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmFeedsXmlComponent } from './gtm-feeds-xml.component';

describe('GtmFeedsXmlComponent', () => {
  let component: GtmFeedsXmlComponent;
  let fixture: ComponentFixture<GtmFeedsXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtmFeedsXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtmFeedsXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
