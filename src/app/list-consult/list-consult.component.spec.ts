import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultComponent } from './list-consult.component';

describe('ListConsultComponent', () => {
  let component: ListConsultComponent;
  let fixture: ComponentFixture<ListConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
