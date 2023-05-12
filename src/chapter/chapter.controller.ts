import { Controller, Get } from '@nestjs/common';

@Controller('hsfinder/chapter')
export class ChapterController {
    @Get()
    async returnSome() {
        return 'hello'
    }
}