import { Author } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorEntity implements Author {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
