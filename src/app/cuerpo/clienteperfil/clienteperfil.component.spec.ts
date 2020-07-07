import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { clienteperfilComponent } from './clienteperfil.component';

describe('clienteperfilComponent', () => {
  let component: clienteperfilComponent;
  let fixture: ComponentFixture<clienteperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clienteperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clienteperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
