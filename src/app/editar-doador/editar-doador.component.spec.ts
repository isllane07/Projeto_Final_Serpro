import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDoadorComponent } from './editar-doador.component';

describe('EditarDoadorComponent', () => {
  let component: EditarDoadorComponent;
  let fixture: ComponentFixture<EditarDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarDoadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
