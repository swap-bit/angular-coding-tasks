import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNoComponent } from './random-no.component';

describe('RandomNoComponent', () => {
  let component: RandomNoComponent;
  let fixture: ComponentFixture<RandomNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
