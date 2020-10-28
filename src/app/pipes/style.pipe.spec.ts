import { CssClass, StyleEnum } from '../models/style.enum';
import { StylePipe } from './style.pipe';

describe('StylePipe', (): void =>
{
    it('##01 - create an instance', (): void =>
    {
        const pipe = new StylePipe();
        expect(pipe).toBeTruthy();
    });

    it('##02 - null styles, generates empty class', (): void =>
    {
        const styles: Array<StyleEnum> = null;
        const actual: string = new StylePipe().transform(styles);
        const expected: string = CssClass.NONE;
        expect(actual).toBe(expected);
    });

    it('##03 - empty styles, generates empty class', (): void =>
    {
        const styles: Array<StyleEnum> = [];
        const actual: string = new StylePipe().transform(styles);
        const expected: string = CssClass.NONE;
        expect(actual).toBe(expected);
    });

    it('##04 - bold and small font enum, generates small and bold class', (): void =>
    {
        const styles: Array<StyleEnum> = [StyleEnum.FONT_BOLD, StyleEnum.FONT_SM];
        const actual: string = new StylePipe().transform(styles);
        const expected: string = CssClass.FONT_BOLD + ' ' + CssClass.FONT_SM;
        expect(actual).toBe(expected);
    });
});
