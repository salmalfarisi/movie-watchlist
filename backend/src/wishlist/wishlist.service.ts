import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Data, DataDocument } from './schema/data.schema';
import * as dayjs from 'dayjs';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Data.name) private catModel: Model<DataDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createWishlistDto: CreateWishlistDto) {
    const checkExist = await this.catModel
      .findOne({ movieId: createWishlistDto.movieId, deleted_at: null })
      .exec();
    if (checkExist != null && checkExist != undefined) {
      return 'Data Already Exist';
    }

    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      createWishlistDto.created_at = dayjs().format('YYYY-MM-DD HH:mm:ss');
      createWishlistDto.updated_at = dayjs().format('YYYY-MM-DD HH:mm:ss');
      createWishlistDto.deleted_at = null;
      await this.catModel.create([createWishlistDto], { session });

      await session.commitTransaction();
      return 'Data successfully Added';
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async findAll() {
    return this.catModel.find().exec();
  }

  async findOne(id: string) {
    return this.catModel.find({ _id: id }).exec();
  }

  async update(id: string, updateWishlistDto: UpdateWishlistDto) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      updateWishlistDto.updated_at = dayjs().format('YYYY-MM-DD HH:mm:ss');
      await this.catModel.findByIdAndUpdate(id, updateWishlistDto).exec();

      await session.commitTransaction();
      return 'Data successfully updated';
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  async remove(id: string) {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await this.catModel.findOneAndDelete({ _id: id }).exec();

      await session.commitTransaction();
      return 'Data successfully deleted';
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }

  //   async createCatWithTransaction() {
  //     const session = await this.connection.startSession();
  //     session.startTransaction();
  //     try {
  //       await this.catModel.create([
  //         {
  //           'name':'test5'
  //         }
  //       ], { session });
  //
  //       throw Error;
  //
  //       await session.commitTransaction();
  //       return true;
  //     } catch (error) {
  //       await session.abortTransaction();
  //       throw error;
  //     } finally {
  //       session.endSession();
  //     }
  //   }
}
