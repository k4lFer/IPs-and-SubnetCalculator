import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsIdentifierComponent } from './ips-identifier.component';

describe('IpsIdentifierComponent', () => {
  let component: IpsIdentifierComponent;
  let fixture: ComponentFixture<IpsIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpsIdentifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpsIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
