import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseCommandeChapeuaComponent } from './prise-commande-chapeua.component';

describe('PriseCommandeChapeuaComponent', () => {
  let component: PriseCommandeChapeuaComponent;
  let fixture: ComponentFixture<PriseCommandeChapeuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriseCommandeChapeuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriseCommandeChapeuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
