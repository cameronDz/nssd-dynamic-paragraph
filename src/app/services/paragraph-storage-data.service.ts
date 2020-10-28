import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as _example from '../../assets/exampleOne.json';

@Injectable({ providedIn: 'root' })
export class ParagraphStorageDataService
{

    private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(_example.payload);

    constructor() {}

    public getData(self: any, callback: (self: any, data: any) => void): Subscription
    {
        return this.dataSubject.asObservable().pipe().subscribe((data: any) => callback(self, data));
    }
}
