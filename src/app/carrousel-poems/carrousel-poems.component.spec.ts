import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPoemsComponent } from './carrousel-poems.component';

describe('CarrouselPoemsComponent', () => {
  let component: CarrouselPoemsComponent;
  let fixture: ComponentFixture<CarrouselPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselPoemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
