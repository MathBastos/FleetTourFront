import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarViagemComponent } from './listar-viagem.component';

describe('ListarViagemComponent', () => {
  let component: ListarViagemComponent;
  let fixture: ComponentFixture<ListarViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
