import { PartialType } from '@nestjs/mapped-types';
import { CreateWishlistDto } from './create-wishlist.dto';

export class UpdateWishlistDto extends PartialType(CreateWishlistDto) {
  movieId: number;

  year: number;

  genre: number[];

  notify_me: string[];

  already_watch: boolean;

  created_at: string;

  updated_at: string;

  deleted_at: string;
}
