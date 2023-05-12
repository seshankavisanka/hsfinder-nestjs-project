import { Types } from "../schemas/section.schema";

export class UpadteSectionDTO {

    readonly hsChapterNumber: number;

    readonly hsChapterRoman: string;

    readonly type: Types;

    readonly title: string;

    readonly description: string;

    readonly moreInfo: string[];

    readonly imposedBill: string;

    readonly source: string;

    readonly reference: string;

    readonly lastUpdated: string;

    readonly section: string;

}