import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosCardsComponent } from './platos-cards.component';

describe('PlatosCardsComponent', () => {
  let component: PlatosCardsComponent;
  let fixture: ComponentFixture<PlatosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
