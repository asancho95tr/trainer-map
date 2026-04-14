import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarotBoardComponent } from './tarot-board.component';

describe('TarotBoardComponent', () => {
  let component: TarotBoardComponent;
  let fixture: ComponentFixture<TarotBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarotBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarotBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
