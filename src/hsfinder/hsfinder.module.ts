import { Module } from '@nestjs/common';
import { HsfinderController } from './hsfinder.controller';
import { HsfinderService } from './hsfinder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HSfinderSchema } from './schemas/hsfinder.schema';

@Module({
  // imports: [MongooseModule.forFeature([{
  //   name: 'HSfinder',
  //   schema: HSfinderSchema,
  // }])],
  controllers: [HsfinderController],
  providers: [HsfinderService]
})
export class HsfinderModule {}
