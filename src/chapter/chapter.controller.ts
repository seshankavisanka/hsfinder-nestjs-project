import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterDTO } from './dto/chapter.dto';
import { Chapter } from './schemas/chapter.schema';
import { UpadteChapterDTO } from './dto/updatechapter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Chapter')
@Controller('hsfinder/chapter')
export class ChapterController {
    constructor(private chapterService: ChapterService) {}

    @Get()
    async returnSome() {
        return this.chapterService.findAllChapter();
    }

    @Post('createchapter')
    async createChapter(
        @Body()
        chapter: ChapterDTO
    ): Promise<Chapter> {
        return this.chapterService.createChapter(chapter);
    }

    @Get(':id')
    async getOneChapetr(
        @Param('id')
        id: string
    ): Promise<Chapter> {
        return this.chapterService.findChapterByID(id)
    }

    @Put('updatechapter/:id')
    async updateChapter(
        @Param('id')
        id: string,
        @Body()
        chapter: UpadteChapterDTO
    ): Promise<Chapter> {
        return this.chapterService.updateChapterByID(id, chapter);
    }

    @Delete('deletechapter/:id')
    async deleteChapter(
        @Param('id')
        id: string,
    ): Promise<Chapter> {
        return this.chapterService.deleteChapterByID(id);
    }
}