import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteStyleComponent } from './favorite-style.component';

describe('FavoriteStyleComponent', () => {
  let component: FavoriteStyleComponent;
  let fixture: ComponentFixture<FavoriteStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
