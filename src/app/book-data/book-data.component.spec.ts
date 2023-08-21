import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosComponent } from './book-data.component';

describe('BookDataComponent', () => {
  let component: LivrosComponent;
  let fixture: ComponentFixture<LivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
