import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HsfinderService } from './hsfinder.service';
import { HScode } from './schemas/hsfinder.schema';
import { HSFinderDTO } from './dto/hsfinder.dto';

@Controller('hsfinder')
export class HsfinderController {
    constructor(private hsfinderService: HsfinderService) {}

    @Get()
    async getAll(): Promise<HScode[]> {
        return this.hsfinderService.findAll();
    }

    @Post()
    async createAll(
        @Body()
        hscode: HSFinderDTO
    ): Promise<HScode> {
        return this.hsfinderService.create(hscode);
    }

    @Get(":id")
    async getOne(
        @Param('id')
        id: string
    ): Promise<HScode> {
        return this.hsfinderService.findByID(id);
    }

    @Put(':id')
    async updateOne(
        @Param('id')
        id: string,
        @Body()
        hscode: HSFinderDTO
    ): Promise<HScode> {
        return this.hsfinderService.updateByID(id, hscode);
    }

    @Delete(':id')
    async deleteOne(
        @Param('id')
        id: string
    ): Promise<HScode> {
        return this.hsfinderService.deleteByID(id);
    }

}
