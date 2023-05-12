import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { HsfinderService } from './hsfinder.service';
import { HScode } from './schemas/hsfinder.schema';
import { HSFinderDTO } from './dto/hsfinder.dto';

@Controller('hsfinder/hscode')
export class HsfinderController {
    constructor(private hsfinderService: HsfinderService) {}

    @Get()
    async getAllHScode(): Promise<HScode[]> {
        return this.hsfinderService.findAllHScode();
    }

    @Post('createhscode')
    async createHScode(
        @Body()
        hscode: HSFinderDTO
    ): Promise<HScode> {
        return this.hsfinderService.createHScode(hscode);
    }

    @Get(":id")
    async getOneHScode(
        @Param('id')
        id: string
    ): Promise<HScode> {
        return this.hsfinderService.findHScodeByID(id);
    }

    @Put('updatehscode/:id')
    async updateOneHScode(
        @Param('id')
        id: string,
        @Body()
        hscode: HSFinderDTO
    ): Promise<HScode> {
        return this.hsfinderService.updateHScodeByID(id, hscode);
    }

    @Delete('deletehscode/:id')
    async deleteOneHScode(
        @Param('id')
        id: string
    ): Promise<HScode> {
        return this.hsfinderService.deleteHScodeByID(id);
    }

}
