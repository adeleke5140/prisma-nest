import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: true })
  email: string;
}
