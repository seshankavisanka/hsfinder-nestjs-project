import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "../schemas/section.schema";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class selectionDTO {

    @IsNotEmpty()
    @IsEnum(Types)
    @ApiProperty({
        description: 'The types',
        enum: Types,
        example: 'SECTION',
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

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The chapter ID of HS chapter',
        example: '63c9a665771f8d33d566f312',
        type: 'string',
    })
    readonly chapter: string;

}