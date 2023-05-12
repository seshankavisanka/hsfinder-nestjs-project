import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import mongoose from 'mongoose';

@Injectable()
export class SectionService {

    constructor(
        @InjectModel(Section.name)
        private sectionModel: mongoose.Model<Section>
    ) {}

    async findAllSection(): Promise<Section[]> {
        const findallsection = await this.sectionModel.find();
        return findallsection
    }

    async createSection(section: Section): Promise<Section> {
        const createsection = await this.sectionModel.create(section)
        return createsection
    }

    async findSectionByID(id: string): Promise<Section> {
        const findsection = await this.sectionModel.findById(id)
        if(!findsection) {
            throw new NotFoundException('Chapter not found')
        }
        return findsection
    }

    async updateSectionByID(id: string, section: Section): Promise<Section> {
        const updatesection = await this.sectionModel.findByIdAndUpdate(id, section)
        if(!updatesection) {
            throw new NotFoundException('Chapter not found')
        }
        return updatesection
    }

    async deleteSectionByID(id: string): Promise<Section> {
        const deletesection = await this.sectionModel.findByIdAndDelete(id)
        if(!deletesection) {
            throw new NotFoundException('HScode not found')
        }
        return deletesection
    }

}
