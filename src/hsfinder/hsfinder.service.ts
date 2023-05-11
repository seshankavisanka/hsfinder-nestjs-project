import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HScode } from './schemas/hsfinder.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class HsfinderService {
    constructor(
        @InjectModel(HScode.name, 'hsfinderconnection')
        private hsfinderModel: mongoose.Model<HScode>
    ) {}

    async findAllHScode(): Promise<HScode[]> {
        const findallhsfinder = await this.hsfinderModel.find();
        return findallhsfinder
    }

    async createHScode(hscode: HScode): Promise<HScode> {
        const createhscode = await this.hsfinderModel.create(hscode)
        return createhscode
    }

    async findHScodeByID(id: string): Promise<HScode> {
        const findhscode = await this.hsfinderModel.findById(id)
        if(!findhscode) {
            throw new NotFoundException('Chapter not found')
        }
        return findhscode
    }

    async updateHScodeByID(id: string, hscode: HScode): Promise<HScode> {
        const updatehscode = await this.hsfinderModel.findByIdAndUpdate(id, hscode, {
            new: true,
            runValidators: true
        })
        if(!hscode) {
            throw new NotFoundException('Chapter not found')
        }
        return updatehscode
    }

    async deleteHScodeByID(id: string): Promise<HScode> {
        const deletehscode = await this.hsfinderModel.findByIdAndDelete(id)
        if(!deletehscode) {
            throw new NotFoundException('Chapter not found')
        }
        return deletehscode
    }

}
