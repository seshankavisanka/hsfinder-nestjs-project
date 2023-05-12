import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { HsfinderService } from './hsfinder.service';
import { HScode } from './schemas/hsfinder.schema';
import { HSFinderDTO } from './dto/hsfinder.dto';
import { UpdateHSFinderDTO } from './dto/updatehsfinder.dto';

@Controller('hsfinder/hscode')
export class HsfinderController {
    constructor(private hscodeService: HsfinderService) {}

    @Get()
    async getAllHScode(): Promise<HScode[]> {
        return this.hscodeService.findAllHScode();
    }

    @Post('createhscode')
    async createHScode(
        @Body()
        hscode: HSFinderDTO
    ): Promise<HScode> {
        return this.hscodeService.createHScode(hscode);
    }

    @Get(':id')
    async getOneHScode(
        @Param('id')
        id: string
    ): Promise<any> {
        return this.hscodeService.findHScodeByID(id);
    }

    @Put('updatehscode/:id')
    async updateOneHScode(
        @Param('id')
        id: string,
        @Body()
        hscode: UpdateHSFinderDTO
    ): Promise<HScode> {
        return this.hscodeService.updateHScodeByID(id, hscode);
    }

    @Delete('deletehscode/:id')
    async deleteOneHScode(
        @Param('id')
        id: string
    ): Promise<HScode> {
        return this.hscodeService.deleteHScodeByID(id);
    }

}
