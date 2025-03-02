import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, DataSchema } from './schema/data.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Data.name, schema: DataSchema }],
      process.env.URL,
    ),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
