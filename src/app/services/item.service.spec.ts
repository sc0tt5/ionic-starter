import { TestBed } from '@angular/core/testing';
import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemService = TestBed.inject(ItemService);
    expect(service).toBeTruthy();
  });
});
