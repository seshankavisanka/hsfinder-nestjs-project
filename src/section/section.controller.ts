import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { UpadteSectionDTO } from './dto/updatesection.dto';
import { Section } from './schemas/section.schema';
import { selectionDTO } from './dto/section.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Section')
@Controller('hsfinder/section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  async returnSome() {
    return this.sectionService.findAllSection();
  }

  @Post('createsection')
  async createChapter(
    @Body()
    section: selectionDTO,
  ): Promise<Section> {
    return this.sectionService.createSection(section);
  }

  @Get(':id')
  async getOneChapetr(
    @Param('id')
    id: string,
  ): Promise<Section> {
    return this.sectionService.findSectionByID(id);
  }

  @Put('updatesection/:id')
  async updateChapter(
    @Param('id')
    id: string,
    @Body()
    section: UpadteSectionDTO,
  ): Promise<Section> {
    return this.sectionService.updateSectionByID(id, section);
  }

  @Delete('deletesection/:id')
  async deleteChapter(
    @Param('id')
    id: string,
  ): Promise<Section> {
    return this.sectionService.deleteSectionByID(id);
  }
}
