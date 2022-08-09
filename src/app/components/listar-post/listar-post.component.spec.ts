import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostComponent } from './listar-post.component';

describe('ListarPostComponent', () => {
  let component: ListarPostComponent;
  let fixture: ComponentFixture<ListarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
