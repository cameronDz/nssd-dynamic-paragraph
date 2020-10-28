import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ParagraphModel } from '../../models/paragraph.model';
import { ParagraphStorageDataService } from '../../services/paragraph-storage-data.service';

@Component({
    selector: 'nssd-paragraph-section',
    templateUrl: './paragraph-section.component.html',
    styleUrls: ['./paragraph-section.component.scss']
})
export class ParagraphSectionComponent implements OnDestroy, OnInit
{

    public paragraph: ParagraphModel = null;
    private storageSubscription: Subscription = null;

    constructor(private paragraphStorageDataService: ParagraphStorageDataService) {}

    ngOnInit(): void
    {
        this.paragraphStorageDataService.getData(this, this.paragraphStorageCallback);
    }

    ngOnDestroy(): void
    {
        if (!!this.storageSubscription)
        {
            this.storageSubscription.unsubscribe();
        }
    }

    private paragraphStorageCallback(self: ParagraphSectionComponent, data: ParagraphModel): void
    {
        self.paragraph = data;
    }
}
