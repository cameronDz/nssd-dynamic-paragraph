import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParagraphSectionComponent } from './paragraph-section.component';

describe('ParagraphSectionComponent', () => {
    let component: ParagraphSectionComponent;
    let fixture: ComponentFixture<ParagraphSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ParagraphSectionComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ParagraphSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
