import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetTableComponent } from './subnet-table.component';

describe('SubnetTableComponent', () => {
  let component: SubnetTableComponent;
  let fixture: ComponentFixture<SubnetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnetTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubnetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
