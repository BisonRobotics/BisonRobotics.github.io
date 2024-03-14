import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowplowComponent } from './snowplow.component';

describe('SnowplowComponent', () => {
  let component: SnowplowComponent;
  let fixture: ComponentFixture<SnowplowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowplowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowplowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
