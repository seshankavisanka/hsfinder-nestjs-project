import { Module } from '@nestjs/common';
import { HsfinderController } from './hsfinder.controller';
import { HsfinderService } from './hsfinder.service';

@Module({
  controllers: [HsfinderController],
  providers: [HsfinderService]
})
export class HsfinderModule {}
