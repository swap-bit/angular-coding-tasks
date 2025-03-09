import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNoTableComponent } from './random-no-table.component';

describe('RandomNoTableComponent', () => {
  let component: RandomNoTableComponent;
  let fixture: ComponentFixture<RandomNoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
