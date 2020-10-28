import { Component, Input, OnInit } from '@angular/core';
import { ParagraphModel } from '../../models/paragraph.model';

@Component({
    selector: 'nssd-dynamic-paragraph',
    templateUrl: './dynamic-paragraph.component.html',
    styleUrls: ['./dynamic-paragraph.component.scss']
})
export class DynamicParagraphComponent implements OnInit
{

    @Input() paragraph: ParagraphModel = null;

    constructor() {}

    ngOnInit(): void {}

}
