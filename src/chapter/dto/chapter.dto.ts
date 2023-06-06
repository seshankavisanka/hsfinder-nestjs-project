import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/chapter.schema";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ChapterDTO {

    @IsNotEmpty()
    @IsNumber()
    @ApiPropertyOptional({
        description: 'The number of HS capter code',
        example: 84,
        type: 'number',
    })
    readonly hsChapterNumber?: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The number of HS chapter code in Roman numerals',
        example: 'LXXXIV'
    })
    readonly hsChapterRoman: string;

    @IsNotEmpty()
    @IsEnum(Types)
    @ApiProperty({
        description: 'The types',
        enum: Types,
        enumName: 'Types',
    })
    readonly type: Types;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The title of HS chapter',
        type: 'string',
    })
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The description of HS chapter',
        type: 'string',
    })
    readonly description: string;

    @IsNotEmpty()
    @IsArray()
    @ApiPropertyOptional({
        description: 'The more information array',
        type: 'array',
    })
    readonly moreInfo?: string[];

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The inmposed bill of HS chapter',
        type: 'string',
    })
    readonly imposedBill: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The source of HS chapter',
        type: 'string',
    })
    readonly source: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The reference of HS chapter',
        type: 'string',
    })
    readonly reference: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Last update of the HS chapter',
        example: '2023-01-1024HRS',
        type: 'string',
    })
    readonly lastUpdated: string;

}