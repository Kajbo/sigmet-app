import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextColoringComponent } from './text-coloring.component';

describe('TextColoringComponent', () => {
  let component: TextColoringComponent;
  let fixture: ComponentFixture<TextColoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextColoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextColoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
