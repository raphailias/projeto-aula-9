import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInputComponent } from './lista-input.component';

describe('ListaInputComponent', () => {
  let component: ListaInputComponent;
  let fixture: ComponentFixture<ListaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
