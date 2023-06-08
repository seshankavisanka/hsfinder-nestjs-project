import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from '../schemas/hsfinder.schema';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class History {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The date of history at HS chapter',
    example: '2023-01-1024HRS',
    type: 'string',
  })
  date: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The value of history at HS chapter',
    example: '9%',
    type: 'string',
  })
  value: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The imposed bill history at HS chapter',
    type: 'string',
  })
  imposedBill: string;
}

class Duty {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The group of duty at HS chapter',
    type: 'string',
  })
  group: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The key of duty at HS chapter',
    type: 'string',
  })
  key: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The value of duty at HS chapter',
    type: 'string',
  })
  value: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Since of duty at HS chapter',
    type: 'string',
  })
  since: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Last modified of duty at HS chapter',
    type: 'string',
  })
  lastModified: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => History)
  @ApiPropertyOptional({
    type: [History],
  })
  history?: History[];
}

class ReferenceProduct {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The name of reference product at HS chapter',
    type: 'string',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The description of rederence product at HS code',
    type: 'string',
  })
  description: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The keyword of rederence product at HS code',
    type: 'string',
  })
  keywords: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The source of rederence product at HS code',
    type: 'string',
  })
  source: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The image of rederence product at HS code',
    type: 'string',
  })
  image: string;
}

export class HSFinderDTO {
  @IsNotEmpty()
  @IsNumber()
  @ApiPropertyOptional({
    description: 'The number of HS capter code',
    example: 90,
    type: 'number',
  })
  readonly hsChapterNumber?: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The number of HS chapter code in Roman numerals',
    example: 'XVII',
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

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The keword of HS chapter',
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

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The chapter ID of HS chapter',
    example: '44c9a665771f8d33d22333',
    type: 'string',
  })
  readonly chapter: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Duty)
  @ApiPropertyOptional({
    type: [Duty],
  })
  readonly duty?: Duty[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReferenceProduct)
  @ApiPropertyOptional({
    type: [ReferenceProduct],
  })
  readonly referenceProduct?: ReferenceProduct[];
}
