import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/article.schema";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ArticleDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The number of HS code',
        example: '9020',
        type: 'string',
    })
    readonly hsCode: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiPropertyOptional({
        description: 'The number of HS capter code',
        example: 90,
        type: 'number',
    })
    readonly hsNumber?: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The number of HS chapter code in Roman numerals',
        example: 'XVII'
    })
    readonly hsRoman: string;

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

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The keword of HS chapter',
        example: '',
        type: 'string',
    })
    readonly keywords: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The section ID of HS chapter',
        example: '63c9a665771f8d33d566f312',
        type: 'string',
    })
    readonly section: string;

    @IsArray()
    @ApiProperty({
        type: '[string]',
    })
    readonly duty: string[];

    @IsArray()
    @ApiProperty({
        type: '[string]',
    })
    readonly referenceProduct: string[]; 

}