import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/section.schema";

export class selectionDTO {

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

    @IsNotEmpty()
    @IsString()
    readonly chapter: string;

}