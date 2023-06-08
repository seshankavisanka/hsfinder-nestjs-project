import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from './schemas/article.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: mongoose.Model<Article>,
  ) {}

  async findAllArticle(): Promise<Article[]> {
    const findallarticle = await this.articleModel.find();
    if (!findallarticle) {
      throw new NotFoundException('Article not found');
    }
    return findallarticle;
  }

  async createArticle(article: Article): Promise<Article> {
    const createarticle = await this.articleModel.create(article);
    return createarticle;
  }

  async findArticleByID(id: string): Promise<Article> {
    const findarticle = await this.articleModel.findById(id);
    if (!findarticle) {
      throw new NotFoundException('Article not found');
    }
    return findarticle;
  }

  async updateArticleByID(id: string, article: Article): Promise<Article> {
    const updatearticle = await this.articleModel.findByIdAndUpdate(
      id,
      article,
      {
        new: true,
      },
    );
    if (!updatearticle) {
      throw new NotFoundException('Article not found');
    }
    return updatearticle;
  }

  async deleteArticleByID(id: string): Promise<Article> {
    const deletearticle = await this.articleModel.findByIdAndDelete(id);
    if (!deletearticle) {
      throw new NotFoundException('Article not found');
    }
    return deletearticle;
  }
}
