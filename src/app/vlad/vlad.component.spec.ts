import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VladComponent } from './vlad.component';

describe('VladComponent', () => {
  let component: VladComponent;
  let fixture: ComponentFixture<VladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
