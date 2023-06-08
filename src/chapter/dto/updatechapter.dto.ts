import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Types } from '../schemas/chapter.schema';

export class UpadteChapterDTO {
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
}
