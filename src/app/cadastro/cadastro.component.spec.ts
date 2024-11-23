import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDoadorComponent} from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastrarDoadorComponent;
  let fixture: ComponentFixture<CadastrarDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarDoadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
