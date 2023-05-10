import { Controller, Get } from '@nestjs/common';
import { HsfinderService } from './hsfinder.service';
import { HSfinder } from './schemas/hsfinder.schema';

@Controller('hsfinder')
export class HsfinderController {
    constructor(private hsfinderService: HsfinderService) {}

    @Get()
    async getAll(): Promise<HSfinder[]> {
        return this.hsfinderService.findAll();
    }

}
