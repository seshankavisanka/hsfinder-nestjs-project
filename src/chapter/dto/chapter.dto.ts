import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/chapter.schema";

export class ChapterDTO {

    @IsNotEmpty()
    @IsNumber()
    readonly hsChapterNumber: number;

    @IsNotEmpty()
    @IsString()
    readonly hsChapterRoman: string;

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

}