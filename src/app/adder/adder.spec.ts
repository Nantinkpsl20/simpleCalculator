import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adder } from './adder';

describe('Adder', () => {
  let component: Adder;
  let fixture: ComponentFixture<Adder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
