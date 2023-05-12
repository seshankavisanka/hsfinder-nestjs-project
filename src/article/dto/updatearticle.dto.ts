import { IsEnum } from "class-validator";
import { Types } from "../schemas/article.schema";

export class UpdateArticleDTO {

    readonly hsCode: string;

    readonly hsNumber: number;

    readonly hsRoman: string;

    readonly type: Types;

    readonly title: string;

    readonly description: string;

    readonly imposedBill: string;

    readonly source: string;

    readonly reference: string;

    readonly lastUpdated: string;

    readonly keywords: string;

    readonly section: string;

    readonly duty: string[];

    readonly referenceProduct: string[]; 

}