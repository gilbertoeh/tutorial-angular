import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsAngularComponent } from './que-es-angular.component';

describe('QueEsAngularComponent', () => {
  let component: QueEsAngularComponent;
  let fixture: ComponentFixture<QueEsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
