import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosComponent } from './puestos.component';

describe('PuestosComponent', () => {
  let component: PuestosComponent;
  let fixture: ComponentFixture<PuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
