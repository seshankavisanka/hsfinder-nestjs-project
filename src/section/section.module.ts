import { Module } from '@nestjs/common';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './schemas/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Section',
        schema: SectionSchema,
      },
    ]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
