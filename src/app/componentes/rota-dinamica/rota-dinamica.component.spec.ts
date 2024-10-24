import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaDinamicaComponent } from './rota-dinamica.component';

describe('RotaDinamicaComponent', () => {
  let component: RotaDinamicaComponent;
  let fixture: ComponentFixture<RotaDinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotaDinamicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
