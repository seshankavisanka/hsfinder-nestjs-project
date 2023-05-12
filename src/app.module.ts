import { Module } from '@nestjs/common';
import { HsfinderModule } from './hsfinder/hsfinder.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterModule } from './chapter/chapter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      connectionName: 'hsfinderconnection',
    }),
    HsfinderModule,
    ChapterModule
  ]
})
export class AppModule {}
