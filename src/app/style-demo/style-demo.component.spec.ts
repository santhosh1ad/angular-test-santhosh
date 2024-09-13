import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDemoComponent } from './style-demo.component';

describe('StyleDemoComponent', () => {
  let component: StyleDemoComponent;
  let fixture: ComponentFixture<StyleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
