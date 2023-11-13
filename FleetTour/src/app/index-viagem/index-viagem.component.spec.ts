import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexViagemComponent } from './index-viagem.component';

describe('IndexViagemComponent', () => {
  let component: IndexViagemComponent;
  let fixture: ComponentFixture<IndexViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
