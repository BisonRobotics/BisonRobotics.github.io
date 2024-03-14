import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ri3dComponent } from './ri3d.component';

describe('Ri3dComponent', () => {
  let component: Ri3dComponent;
  let fixture: ComponentFixture<Ri3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ri3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ri3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
