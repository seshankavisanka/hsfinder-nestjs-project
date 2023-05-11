import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "../schemas/hsfinder.schema";

class History {

    @IsNotEmpty()
    @IsString()
    date: string;

    @IsNotEmpty()
    @IsString()
    value: string;

    @IsNotEmpty()
    @IsString()
    imposedBill: string;
    
}

class Duty {

    @IsNotEmpty()
    @IsString()
    group: string;

    @IsNotEmpty()
    @IsString()
    key: string;
    value: string;

    @IsNotEmpty()
    @IsString()
    since: string;

    @IsNotEmpty()
    @IsString()
    lastModified: string;

    @IsNotEmpty()
    @IsEnum(History)
    history: History;

}

class ReferenceProduct {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    keywords: string;

    @IsNotEmpty()
    @IsString()
    source: string;

    @IsNotEmpty()
    @IsString()
    image: string;

}

export class HSFinderDTO {

    @IsNotEmpty()
    @IsNumber()
    readonly hsChapterNumber: number;

    @IsNotEmpty()
    @IsString()
    readonly hsChapterRoman: string;

    @IsNotEmpty()
    @IsEnum(Type)
    readonly type: Type;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsArray()
    readonly moreInfo: string[];

    @IsNotEmpty()
    @IsString()
    readonly imposedBill: string;

    @IsNotEmpty()
    @IsString()
    readonly source: string;

    @IsNotEmpty()
    @IsString()
    readonly reference: string;

    @IsNotEmpty()
    @IsString()
    readonly lastUpdated: string;

    @IsNotEmpty()
    @IsString()
    readonly keywords: string;

    @IsNotEmpty()
    @IsString()
    readonly section: string;

    @IsNotEmpty()
    @IsString()
    readonly chapter: string;

    @IsNotEmpty()
    @IsEnum(Duty)
    readonly duty: Duty;

    @IsNotEmpty()
    @IsEnum(ReferenceProduct)
    readonly referenceProduct: ReferenceProduct;

}