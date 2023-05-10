import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HSfinder } from './schemas/hsfinder.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class HsfinderService {
    constructor(
        @InjectModel(HSfinder.name)
        private hsfinderModel: mongoose.Model<HSfinder>
    ) {}

    async findAll(): Promise<HSfinder[]> {
        const hsfinder = await this.hsfinderModel.find();
        return hsfinder
    }

}
