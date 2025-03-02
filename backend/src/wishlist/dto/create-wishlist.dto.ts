import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateWishlistDto {
  _id: { oid: String };

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  movieId: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  year: number;

  @ApiProperty()
  @JoiSchema(Joi.array().required())
  genre: number[];

  @ApiProperty({
    example: [
      {
        '2024-12-12 00:00:00': {
          repeatable: false,
          last_event: '2024-12-12 00:00:00',
          freq: 1,
          type_freq: 'time',
        },
      },
    ],
  })
  @JoiSchema(Joi.array().required())
  notify_me: any[];

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  already_watch: boolean;

  @ApiHideProperty()
  created_at: string;

  @ApiHideProperty()
  updated_at: string;

  @ApiHideProperty()
  deleted_at: string;
}
