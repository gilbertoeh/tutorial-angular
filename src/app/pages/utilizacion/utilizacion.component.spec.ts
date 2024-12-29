import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizacionComponent } from './utilizacion.component';

describe('UtilizacionComponent', () => {
  let component: UtilizacionComponent;
  let fixture: ComponentFixture<UtilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
