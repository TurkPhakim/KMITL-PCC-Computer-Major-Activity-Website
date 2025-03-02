import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPostComponent } from './up-post.component';

describe('UpPostComponent', () => {
  let component: UpPostComponent;
  let fixture: ComponentFixture<UpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
