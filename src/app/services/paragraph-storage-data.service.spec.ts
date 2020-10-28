import { TestBed } from '@angular/core/testing';
import { ParagraphStorageDataService } from './paragraph-storage-data.service';

describe('ParagraphStorageDataService', () => {
    let service: ParagraphStorageDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ParagraphStorageDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
