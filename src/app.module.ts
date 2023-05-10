import { Module } from '@nestjs/common';
import { HsfinderModule } from './hsfinder/hsfinder.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    HsfinderModule,
  ],
})
export class AppModule {}
