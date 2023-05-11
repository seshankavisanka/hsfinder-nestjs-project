import { Module } from '@nestjs/common';
import { HsfinderController } from './hsfinder.controller';
import { HsfinderService } from './hsfinder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HScode, HScodeSchema } from './schemas/hsfinder.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'HScode',
    schema: HScodeSchema
  }], 'hsfinderconnection')],
  controllers: [HsfinderController],
  providers: [HsfinderService]
})
export class HsfinderModule {}
