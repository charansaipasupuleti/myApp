import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errorlogin } from './errorlogin';

describe('Errorlogin', () => {
  let component: Errorlogin;
  let fixture: ComponentFixture<Errorlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errorlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errorlogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
