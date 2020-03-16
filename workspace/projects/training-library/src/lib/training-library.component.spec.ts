import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLibraryComponent } from './training-library.component';

describe('TrainingLibraryComponent', () => {
  let component: TrainingLibraryComponent;
  let fixture: ComponentFixture<TrainingLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
