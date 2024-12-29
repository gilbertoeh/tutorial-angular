import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemasComunesComponent } from './problemas-comunes.component';

describe('ProblemasComunesComponent', () => {
  let component: ProblemasComunesComponent;
  let fixture: ComponentFixture<ProblemasComunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemasComunesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemasComunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
