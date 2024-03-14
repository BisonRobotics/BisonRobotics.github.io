import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaComponent } from './nasa.component';

describe('NasaComponent', () => {
  let component: NasaComponent;
  let fixture: ComponentFixture<NasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
