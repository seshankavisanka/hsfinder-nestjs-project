import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HScode } from './schemas/hsfinder.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class HsfinderService {
    constructor(
        @InjectModel(HScode.name)
        private hsfinderModel: mongoose.Model<HScode>
    ) {}

    async findAll(): Promise<HScode[]> {
        const hsfinder = await this.hsfinderModel.find();
        return hsfinder
    }
/*
    async create(hscode: HSfinder): Promise<HSfinder> {
        const createhscode = await this.hsfinderModel.create(hscode)
        return createhscode
    }

    async findByID(id: string): Promise<HSfinder> {
        const hscode = await this.hsfinderModel.findById(id)
        if(!hscode) {
            throw new NotFoundException('Chapter not found')
        }
        return hscode
    }

    async updateByID(id: string, hscode: HSfinder): Promise<HSfinder> {
        const updatehscode = await this.hsfinderModel.findByIdAndUpdate(id, hscode, {
            new: true,
            runValidators: true
        })
        if(!hscode) {
            throw new NotFoundException('Chapter not found')
        }
        return updatehscode
    }

    async deleteByID(id: string): Promise<HSfinder> {
        const hscode = await this.hsfinderModel.findById(id)
        if(!hscode) {
            throw new NotFoundException('Chapter not found')
        }
        return hscode
    }
*/
}
