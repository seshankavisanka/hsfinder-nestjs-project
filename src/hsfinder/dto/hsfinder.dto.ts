import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "../schemas/hsfinder.schema";

class History {
    date: string;
    value: string;
    imposedBill: string;
}

class Duty {
    group: string;
    key: string;
    value: string;
    since: string;
    lastModified: string;
    history: History;
}

class ReferenceProduct {
    name: string;
    description: string;
    keywords: string;
    source: string;
    image: string;
}

export class HSFinderDTO {
    @IsNumber()
    @IsNotEmpty()
    readonly hsChapterNumber: number;
    readonly hsChapterRoman: string;
    readonly type: Type;
    readonly title: string;
    readonly description: string;
    readonly moreInfo: string[];
    readonly imposedBill: string;
    readonly source: string;
    readonly reference: string;
    readonly lastUpdated: string;
    readonly keywords: string;
    readonly section: string;
    readonly chapter: string;
    readonly duty: Duty;
    readonly referenceProduct: ReferenceProduct;
}