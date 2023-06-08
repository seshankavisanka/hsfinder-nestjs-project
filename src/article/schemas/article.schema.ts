import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Types {
  Article = 'ARTICLE',
  Section = 'SECTION',
  Chapter = 'CHAPTER',
}

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  hsCode: string;

  @Prop()
  hsNumber?: number;

  @Prop()
  hsRoman: string;

  @Prop()
  type: Types;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  imposedBill: string;

  @Prop()
  source: string;

  @Prop()
  reference: string;

  @Prop()
  lastUpdated: string;

  @Prop()
  keywords: string;

  @Prop()
  section: string;

  @Prop({ type: [String] })
  duty: string[];

  @Prop({ type: [String] })
  referenceProduct: string[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
