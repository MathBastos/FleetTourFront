import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOnibusComponent } from './editar-onibus.component';

describe('EditarOnibusComponent', () => {
  let component: EditarOnibusComponent;
  let fixture: ComponentFixture<EditarOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOnibusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
