import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorSubnetComponent } from './calculator-subnet.component';

describe('CalculatorSubnetComponent', () => {
  let component: CalculatorSubnetComponent;
  let fixture: ComponentFixture<CalculatorSubnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorSubnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatorSubnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
