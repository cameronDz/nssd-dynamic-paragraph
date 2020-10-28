import { StyleEnum } from './style.enum';

export class ParagraphModel
{
    constructor(
        public segments?: Array<ParagraphSegmentModel>,
        public styles?: Array<StyleEnum>) {}
}

export class ParagraphSegmentModel
{
    constructor(
        public text?: string,
        public styles?: Array<StyleEnum>) {}
}
