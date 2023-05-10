import { Module } from '@nestjs/common';
import { HsfinderModule } from './hsfinder/hsfinder.module';

@Module({
  imports: [HsfinderModule],
})
export class AppModule {}
