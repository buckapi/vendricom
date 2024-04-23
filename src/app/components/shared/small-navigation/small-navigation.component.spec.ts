import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNavigationComponent } from './small-navigation.component';

describe('SmallNavigationComponent', () => {
  let component: SmallNavigationComponent;
  let fixture: ComponentFixture<SmallNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
