import {
  Controller,
  Req,
  Request,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Data } from './schema/data.schema';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Body() createWishlistDto: CreateWishlistDto,
  ) {
    const data = await this.wishlistService.create(createWishlistDto);
    return {
      status: typeof data == 'string' ? 201 : 400,
      message:
        data == 'Data successfully Added' ? 'Data successfully Added' : data,
    };
  }

  @Get()
  async findAll() {
    const data = await this.wishlistService.findAll();
    return {
      status: typeof data == 'object' ? 201 : 400,
      message: typeof data == 'object' ? 'index' : data,
      data: typeof data == 'object' ? data : [],
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(id, updateWishlistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.wishlistService.remove(id);
    return {
      status: response == 'Data successfully deleted' ? 201 : 400,
      message: response,
    };
  }

  //   @Post('test')
  //   async create2() {
  //     return this.wishlistService.createCatWithTransaction();
  //   }
}
