import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/article.schema";

export class ArticleDTO {

    @IsNotEmpty()
    @IsString()
    readonly hsCode: string;

    @IsNotEmpty()
    @IsNumber()
    readonly hsNumber: number;

    @IsNotEmpty()
    @IsString()
    readonly hsRoman: string;

    @IsNotEmpty()
    @IsEnum(Types)
    readonly type: Types;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

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
    @IsArray()
    readonly duty: string[];

    @IsNotEmpty()
    @IsArray()
    readonly referenceProduct: string[]; 

}