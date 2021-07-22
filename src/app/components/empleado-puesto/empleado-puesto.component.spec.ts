import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoPuestoComponent } from './empleado-puesto.component';

describe('EmpleadoPuestoComponent', () => {
  let component: EmpleadoPuestoComponent;
  let fixture: ComponentFixture<EmpleadoPuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoPuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
