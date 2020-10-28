import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicParagraphComponent } from './dynamic-paragraph.component';
import { ParagraphModel, ParagraphSegmentModel } from '../../models/paragraph.model';
import { StyleEnum } from '../../models/style.enum';
import { StylePipe } from '../../pipes/style.pipe';

fdescribe('DynamicParagraphComponent', (): void =>
{
    let component: DynamicParagraphComponent;
    let fixture: ComponentFixture<DynamicParagraphComponent>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            declarations: [
                DynamicParagraphComponent,
                StylePipe
            ]
        })
        .compileComponents();
    });

    beforeEach((): void =>
    {
        fixture = TestBed.createComponent(DynamicParagraphComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void =>
    {
        expect(component).toBeTruthy();
    });

    it('create simple paragraph sentence, get middle ', (): void =>
    {
        const expected: string = 'TEST,';
        const segments: Array<ParagraphSegmentModel> = [
            new ParagraphSegmentModel('The is a'),
            new ParagraphSegmentModel(expected, [StyleEnum.FONT_BOLD, StyleEnum.FONT_LG]),
            new ParagraphSegmentModel('so be careful...', [StyleEnum.FONT_SM])
        ];
        component.paragraph = new ParagraphModel(segments, [StyleEnum.FONT_ITALIC]);
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement.querySelector('div p span:nth-child(2)');
        const actual: string = element.innerHTML.trim();
        expect(actual).toBeTruthy(expected);
    });
});
