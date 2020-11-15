import { TestBed } from '@angular/core/testing';

import { PersonajeListService } from './personaje-list.service';

describe('PersonajeListService', () => {
  let service: PersonajeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
