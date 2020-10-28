import { Pipe, PipeTransform } from '@angular/core';
import { CssClass, StyleEnum } from '../models/style.enum';

@Pipe({ name: 'style' })
export class StylePipe implements PipeTransform
{

    transform(styles: Array<StyleEnum>): string
    {
        let css: string = CssClass.NONE;
        const length: number = !!styles ? styles.length : 0;
        for (let idx: number = 0; idx < length; idx++)
        {
            const nextClass: CssClass = CssClass[StyleEnum[styles[idx]]];
            const space: CssClass = !!css ? CssClass.SPACE : CssClass.NONE;
            css += space + nextClass;
        }
        return css;
    }
}
