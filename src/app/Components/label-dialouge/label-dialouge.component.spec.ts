import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDialougeComponent } from './label-dialouge.component';

describe('LabelDialougeComponent', () => {
  let component: LabelDialougeComponent;
  let fixture: ComponentFixture<LabelDialougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDialougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
