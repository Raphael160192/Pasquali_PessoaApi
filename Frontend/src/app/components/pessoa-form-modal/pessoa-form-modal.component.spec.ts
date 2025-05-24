import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFormModalComponent } from './pessoa-form-modal.component';

describe('PessoaFormModalComponent', () => {
  let component: PessoaFormModalComponent;
  let fixture: ComponentFixture<PessoaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaFormModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
