import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import mongoose from 'mongoose';

@Injectable()
export class SectionService {}
