import { IsString, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional() // isoptinal 은 varidation 을 위한 것
  readonly img?: string; // ? 는 ts 를 위한 것

  @IsString()
  @IsOptional()
  readonly birth?: string;

  @IsString()
  @IsOptional()
  readonly etc?: string;
}
