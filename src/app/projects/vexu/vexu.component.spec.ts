import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VexuComponent } from './vexu.component';

describe('VexuComponent', () => {
  let component: VexuComponent;
  let fixture: ComponentFixture<VexuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VexuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VexuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
