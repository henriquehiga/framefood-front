import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEstabelecimentosComponent } from './meus-estabelecimentos.component';

describe('MeusEstabelecimentosComponent', () => {
  let component: MeusEstabelecimentosComponent;
  let fixture: ComponentFixture<MeusEstabelecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusEstabelecimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
