import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Type {
    ARTICLE = 'Article',
    SECTION = 'Section',
    CHAPTER = 'Chapter',
}

@Schema({
    timestamps: true,
})
export class HSfinder {
    @Prop()
    hsChapterNumber: number;

    @Prop()
    hsChapterRoman: string;

    @Prop()
    type: Type;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ type: [String] })
    moreInfo: string;

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

    @Prop()
    chapter: string;

    @Prop({
        type: [{
            group: { type: String },
            key: { type: String },
            value: { type: String },
            since: { type: String },
            lastModified: { type: String },
            history: [{
                date: { type: String },
                value: { type: String },
                imposedBill: { type: String }
            }],
            default: []
        }],
        default: []
    })
    duty: {
        group: string,
        key: string,
        value: string,
        since: string,
        lastModified: string,
        history: {
            date: string,
            value: string,
            imposedBill: string
        }[]
    }

    @Prop({
        type: [{
            name: { type: String },
            description: { type: String },
            keywords: { type: String },
            source: { type: String },
            image: { type: String }
        }],
        default: []
    })
    referenceProduct: {
        name: string,
        description: string,
        keywords: string,
        source: string,
        image: string
    }[]
}

export const HScodeSchema = SchemaFactory.createForClass(HSfinder);