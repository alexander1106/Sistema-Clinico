import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContImgComponent } from './cont-img.component';

describe('ContImgComponent', () => {
  let component: ContImgComponent;
  let fixture: ComponentFixture<ContImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
