import { Module } from '@nestjs/common';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterSchema } from './schemas/chapter.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'Chapter',
    schema: ChapterSchema
  }])],
  controllers: [ChapterController],
  providers: [ChapterService]
})
export class ChapterModule {}
