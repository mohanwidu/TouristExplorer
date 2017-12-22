import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourcitieslistComponent } from './tourcitieslist.component';

describe('TourcitieslistComponent', () => {
  let component: TourcitieslistComponent;
  let fixture: ComponentFixture<TourcitieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourcitieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourcitieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
