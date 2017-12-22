import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceslistComponent } from './placeslist.component';

describe('PlaceslistComponent', () => {
  let component: PlaceslistComponent;
  let fixture: ComponentFixture<PlaceslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
