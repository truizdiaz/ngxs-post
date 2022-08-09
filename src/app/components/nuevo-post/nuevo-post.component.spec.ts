import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPostComponent } from './nuevo-post.component';

describe('NuevoPostComponent', () => {
  let component: NuevoPostComponent;
  let fixture: ComponentFixture<NuevoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
