import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Chapter } from './schemas/chapter.schema';
import mongoose from 'mongoose';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel(Chapter.name)
    private chapterModel: mongoose.Model<Chapter>,
  ) {}

  async findAllChapter(): Promise<Chapter[]> {
    const findallchapter = await this.chapterModel.find();
    return findallchapter;
  }

  async createChapter(chapter: Chapter): Promise<Chapter> {
    const createchapter = await this.chapterModel.create(chapter);
    return createchapter;
  }

  async findChapterByID(id: string): Promise<Chapter> {
    const findchapter = await this.chapterModel.findById(id);
    if (!findchapter) {
      throw new NotFoundException('Chapter not found');
    }
    return findchapter;
  }

  async updateChapterByID(id: string, chapter: Chapter): Promise<Chapter> {
    const updatechapter = await this.chapterModel.findByIdAndUpdate(
      id,
      chapter,
      {
        new: true,
      },
    );
    if (!updatechapter) {
      throw new NotFoundException('Chapter not found');
    }
    return updatechapter;
  }

  async deleteChapterByID(id: string): Promise<Chapter> {
    const deletechapter = await this.chapterModel.findByIdAndDelete(id);
    if (!deletechapter) {
      throw new NotFoundException('Chapter not found');
    }
    return deletechapter;
  }
}
