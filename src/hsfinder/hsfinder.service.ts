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

    async findAllHScode(): Promise<HScode[]> {
        const findallhscode = await this.hsfinderModel.find();
        return findallhscode
    }

    async createHScode(hscode: HScode): Promise<HScode> {
        const createhscode = await this.hsfinderModel.create(hscode)
        return createhscode
    }

    async findHScodeByID(id: string): Promise<HScode> {
        const findhscode = await this.hsfinderModel.findById(id)
        if(!findhscode) {
            throw new NotFoundException('HScode not found')
        }
        return findhscode
    }

    async updateHScodeByID(id: string, hscode: HScode): Promise<HScode> {
        const updatehscode = await this.hsfinderModel.findByIdAndUpdate(id, hscode, {
            new: true,
            runValidators: true
        })
        if(!updatehscode) {
            throw new NotFoundException('HScode not found')
        }
        return updatehscode
    }

    async deleteHScodeByID(id: string): Promise<HScode> {
        const deletehscode = await this.hsfinderModel.findByIdAndDelete(id)
        if(!deletehscode) {
            throw new NotFoundException('HScode not found')
        }
        return deletehscode
    }

}
