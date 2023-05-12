import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Types {
    ARTICLE = 'ARTICLE',
    SECTION = 'SECTION',
    CHAPTER = 'CHAPTER',
}

@Schema({
    timestamps: true,
})
export class Chapter {
    @Prop()
    hsChapterNumber: number;

    @Prop()
    hsChapterRoman: string;

    @Prop()
    type: Types;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: [String] })
    moreInfo: string[];

    @Prop()
    imposedBill: string;

    @Prop()
    source: string;

    @Prop()
    reference: string;

    @Prop()
    lastUpdated: string;

}