import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadNotesButtonComponent } from './load-notes-button.component';

describe('LoadNotesButtonComponent', () => {
  let component: LoadNotesButtonComponent;
  let fixture: ComponentFixture<LoadNotesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadNotesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadNotesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
