import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDTO } from './dto/article.dto';
import { Article } from './schemas/article.schema';
import { UpdateArticleDTO } from './dto/updatearticle.dto';

@Controller('hsfinder/article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get()
    async getAllSrticles() {
        return this.articleService.findAllArticle();
    }

    @Post('createarticle')
    async createChapter(
        @Body()
        article: ArticleDTO
    ): Promise<Article> {
        return this.articleService.createArticle(article);
    }

    @Get(':id')
    async getOneChapetr(
        @Param('id')
        id: string
    ): Promise<Article> {
        return this.articleService.findArticleByID(id)
    }

    @Put('updatearticle/:id')
    async updateChapter(
        @Param('id')
        id: string,
        @Body()
        article: UpdateArticleDTO
    ): Promise<Article> {
        return this.articleService.updateArticleByID(id, article);
    }

    @Delete('deletearticle/:id')
    async deleteChapter(
        @Param('id')
        id: string,
    ): Promise<Article> {
        return this.articleService.deleteArticleByID(id);
    }
}
