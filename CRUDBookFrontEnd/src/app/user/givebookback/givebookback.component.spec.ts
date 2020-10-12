import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivebookbackComponent } from './givebookback.component';

describe('GivebookbackComponent', () => {
  let component: GivebookbackComponent;
  let fixture: ComponentFixture<GivebookbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivebookbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivebookbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
