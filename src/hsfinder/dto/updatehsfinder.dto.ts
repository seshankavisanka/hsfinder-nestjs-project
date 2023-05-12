import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Types } from "../schemas/hsfinder.schema";

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

    @ValidateNested({ each: true })
    @Type(() => History)
    history: History[];

}

class ReferenceProduct {

    name: string;

    description: string;

    keywords: string;

    source: string;

    image: string;

}

export class UpdateHSFinderDTO {

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

    readonly keywords: string;

    readonly section: string;

    readonly chapter: string;

    @ValidateNested({ each: true })
    @Type(() => Duty)
    readonly duty: Duty[];

    @ValidateNested({ each: true })
    @Type(() => ReferenceProduct)
    readonly referenceProduct: ReferenceProduct[];

}