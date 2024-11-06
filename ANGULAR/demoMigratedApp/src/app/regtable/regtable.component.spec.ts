import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegtableComponent } from './regtable.component';

describe('RegtableComponent', () => {
  let component: RegtableComponent;
  let fixture: ComponentFixture<RegtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
